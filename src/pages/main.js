import GraphQLAPI from '@aws-amplify/api-graphql';
import userEvent from '@testing-library/user-event';
import Amplify, { API, graphqlOperation } from 'aws-amplify';
import { subscribe } from 'graphql';
import React, { useState, useEffect, useRef } from 'react';
import { onConditionMonitoringDataRecord } from '../graphql/subscriptions';
import Tables from '../components/tables/index.js';
import BTest from '../components/button';

export default function Main() {
    const [num, setNum] = useState([]);
    const [healthFail, setHealthFail] = useState()
    const [countUn, setCountUn] = useState(0)
    const [countFa, setCountFa] = useState(0)
    const [totes, setTotes] = useState(0)
    const [min, setMin] = useState(0)
    const [max, setMax] = useState(0)
    const [mean, setMean] = useState(0)
    const [sDev, setSDev] = useState(0)
    let health = []

    useEffect(() =>{
        sub()},[]
    )
    
    let list = [] 
    function sub() {
    API.graphql(
        {
            query: onConditionMonitoringDataRecord,
            variables: {
                unitNumber: "5"
            }
        }
    ).subscribe({
        next: (data) => {check(data);
    }})}
    
    function getStdDev(arr){
        // Creating the mean with Array.reduce
        let mean = arr.reduce((acc, curr)=>{
          return acc + curr
        }, 0) / arr.length;
         
        // Assigning (value - mean) ^ 2 to every array item
        arr = arr.map((k)=>{
          return (k - mean) ** 2
        })
         
        // Calculating the sum of updated array
       let sum = arr.reduce((acc, curr)=> acc + curr, 0);
        
       // Calculating the variance
       let variance = sum / arr.length
        
       // Returning the Standered deviation
       return Math.sqrt(sum / arr.length)
      }

    function sumArray(ar) {
        let sum = 0
        for (let i = 0; i < ar.length; i++) {
            sum += ar[i]
        }
        return sum
    }   

    function check(data) {
        console.log(data)
        health = [];
        let lat = [];
        // setHealthFail(health)
        let arr = JSON.parse(data["value"]["data"]["onConditionMonitoringDataRecord"]["data"])
        // console.log(typeof arr);
        arr = arr["healthCheckStatuses"]
        setTotes(arr.length)
        console.log(arr);
        // health.push(arr)
        for (let i = 0; i < arr.length ; i++) {
            // console.log(arr[i])
            // console.log(arr[i]["status"])
            
                if (arr[i]["status"] == "Failed" || arr[i]["status"] == "Unknown") {
                    
                    lat.push(parseFloat(arr[i].latency));
                    console.log(lat)
                    console.log(arr[i]["hostName"]);
                    health.push(arr[i]);
                    console.log(typeof arr[i])
                    console.log(Math.max(...lat))
                };
            }
        let fai = []
        let unkown = []
        let mean = sumArray(lat) / lat.length
        
        health.sort((a,b) => {let keyA = a.latency, keyB = b.latency; if (keyA < keyB) return -1; if (keyA > keyB) return 1; return 0 });
        health.reverse();
        for(let i = 0; i < health.length; i++) {
            if (health[i]["status"] == "Failed") {
                fai.push(health[i]);
            } else {
                unkown.push(health[i])
            }
        }
        console.log(fai.length)
        console.log(unkown.length)
        setCountFa(fai.length)
        setCountUn(unkown.length)
        setHealthFail(health)
        setMin(Math.min(...lat).toFixed(4))
        setMax(Math.max(...lat).toFixed(4))
        setMean(mean.toFixed(4))
        setSDev(getStdDev(lat).toFixed(4))   
    }
    
    
    return(
        <div>
        <h1 style={{margin: "10px 20px"}}>Amplify-Test</h1>
        <BTest.Anchor style={{margin: "15px 20px"}}>
            <BTest.Span onClick={() => {console.log("all")}}>
                All
            </BTest.Span>
        </BTest.Anchor>
        <BTest.Anchor style={{margin: "15px 20px"}}>
            <BTest.Span onClick={() => {console.log("fail")}}>
                Failed
            </BTest.Span>
        </BTest.Anchor>
        <BTest.Anchor style={{margin: "15px 20px"}}>
            <BTest.Span onClick={() => {console.log("unknown")}}>
                Unknown
            </BTest.Span>
        </BTest.Anchor>
        <Tables.Edge style={{minWidth: "0px", width: "625px", margin: "10px 20px", position: "relative"}}>
            <Tables.Table>
            <Tables.Head>
                <Tables.Row>
                    <Tables.Labels>Failed</Tables.Labels>
                    <Tables.Labels>Unknown</Tables.Labels>
                    <Tables.Labels>Total Servers</Tables.Labels>
                    <Tables.Labels>Min Latency</Tables.Labels>
                    <Tables.Labels>Max Latency</Tables.Labels>
                    <Tables.Labels>Mean Latency</Tables.Labels>
                    <Tables.Labels>Std. Deviation</Tables.Labels>
                </Tables.Row>
            </Tables.Head>
            <Tables.Body>
                <Tables.Row>
                <Tables.Data>{countFa}</Tables.Data>
                <Tables.Data>{countUn}</Tables.Data>
                <Tables.Data>{totes}</Tables.Data>
                <Tables.Data>{min}</Tables.Data>
                <Tables.Data>{max}</Tables.Data>
                <Tables.Data>{mean}</Tables.Data>
                <Tables.Data>{sDev}</Tables.Data>
                </Tables.Row>
            </Tables.Body>
            </Tables.Table>
        </Tables.Edge>

        {/* <h3>hostName       Status</h3>
        {healthFail !== undefined ? healthFail.map(items => (
            <>
            <p>{items.hostName}  {items.status}</p>
            </>
        )) : null}
        </div>
    )
    } */}
    {/* <Tables.Edge style={{width: "70%", margin: "10px 20px", position: "relative", left: "150%"}}> */}
    <Tables.Edge style={{width: "70%", margin: "10px 20px", position: "relative"}}>
            <Tables.Table>
                    <Tables.Head>
                        <Tables.Row>
                            <Tables.Labels>Cluster Name</Tables.Labels>
                            <Tables.Labels>Host Name</Tables.Labels>
                            <Tables.Labels>Application</Tables.Labels>
                            <Tables.Labels>Status</Tables.Labels>
                            <Tables.Labels>Message</Tables.Labels>
                            <Tables.Labels>Health Check ID</Tables.Labels>
                            <Tables.Labels>Latency(ms)</Tables.Labels>
                        </Tables.Row>
                    </Tables.Head>
                    <Tables.Body>
                    { healthFail !== undefined ? healthFail.map(items => (
                        <Tables.Row key={items.hostName + items.applicationName}>
                            <Tables.Data>{items.clusterName}</Tables.Data>
                            <Tables.Data>{items.hostName}</Tables.Data>
                            <Tables.Data>{items.applicationName}</Tables.Data>
                            <Tables.Data>{items.status}</Tables.Data>
                            <Tables.Data>{items.message}</Tables.Data>
                            <Tables.Data>{items.clusterHealthCheckId}</Tables.Data>
                            <Tables.Data>{items.latency}</Tables.Data>
                        </Tables.Row>)): null}
                    </Tables.Body>
                </Tables.Table>
                </Tables.Edge>
                </div>
    )}