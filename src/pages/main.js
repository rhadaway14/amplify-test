import GraphQLAPI from '@aws-amplify/api-graphql';
import userEvent from '@testing-library/user-event';
import Amplify, { API, graphqlOperation } from 'aws-amplify';
import { subscribe } from 'graphql';
import React, { useState, useEffect, useRef } from 'react';
import { onConditionMonitoringDataRecord } from '../graphql/subscriptions';
import Tables from '../components/tables/index.js';
import BTest from '../components/button';
import { calculateNewValue } from '@testing-library/user-event/dist/utils';

export default function Main() {
    let health = []
    const [healthFail, setHealthFail] = useState()

    

    useEffect(() =>{
        sub()},[]
    )

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
      

    function isInArray(id) {
        let isIn = health.map( a => a["id"]).includes(id)
        if (isIn === true) {
            return health.map(b => b["id"]).indexOf(id)
        }
        return false
    }

    function check(data) {
        console.log(data)
        let healthData = JSON.parse(data["value"]["data"]["onConditionMonitoringDataRecord"]["data"])
        let newData = healthData["healthCheckStatus"]
        let idIndex = isInArray(newData["id"])

        if (idIndex === false) {
            health = [...health, newData]
            
        } else {
            health[idIndex] = newData
            // console.log("brake")
            health = [...health]
        }
        // console.log(health)
        setHealthFail(health)
    }

//     return this 
    
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

    <Tables.Edge style={{width: "70%", margin: "10px 20px", position: "relative"}}>
            <Tables.Table>
                    <Tables.Head>
                        <Tables.Row>
                            <Tables.Labels>Cluster Name</Tables.Labels>
                            <Tables.Labels>Host Name</Tables.Labels>
                            <Tables.Labels>Side</Tables.Labels>
                            <Tables.Labels>Application</Tables.Labels>
                            <Tables.Labels>Status</Tables.Labels>
                            <Tables.Labels>Message</Tables.Labels>
                            <Tables.Labels>Datetime(UTC)</Tables.Labels>
                        </Tables.Row>
                    </Tables.Head>
                    <Tables.Body>

                    { healthFail !== undefined ? healthFail.map(items => (
                        <Tables.Row key={items.id}>
                            <Tables.Data>{items.clusterName}</Tables.Data>
                            <Tables.Data>{items.hostName}</Tables.Data>
                            <Tables.Data>{items.side}</Tables.Data>
                            <Tables.Data>{items.applicationName}</Tables.Data>
                            <Tables.Data>{items.status}</Tables.Data>
                            <Tables.Data>{items.message}</Tables.Data>
                            <Tables.Data>{items.dateTime}</Tables.Data>
                        </Tables.Row>)): null}
                    </Tables.Body>
                </Tables.Table>
                </Tables.Edge>
                </div>
    )}
