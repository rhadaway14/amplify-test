import styled from 'styled-components';

export const Container = styled.div`
display: flex;
flex-wrap: wrap;
// align-items: center;
width: 100%;
justify-content: space-evenly;
`;

export const Edge = styled.div`
width: 90%;
min-width: 1200px;
max-width: 1500px;
margin: 25px auto;
overflow: hidden;
border-top: 1px solid rgba(255,255,255,0.5);
border-left: 1px solid rgba(255,255,255,0.5);
box-shadow: 10px 10px 20px rgba(0,0,0,0.5);
border-radius: 15px;
// background: rgba(255,255,255,0.1);
// background: rgba(0,0,0,1);
backdrop-filter: blur(5px);
transition: 2.5s;
`;

export const Table = styled.table`
// border-collapse: collapse;
border: 2.5px black solid;
background-color: black;
font-size: 20px;
width: 100%;
border-radius: 15px;
// border-radius: 15px 15px 0 0;
overflow: hidden;
`;

export const Row = styled.tr`
border-bottom: 2px solid rgba(0,0,0,1);
padding: 15px;
// background: rgba(255,255,255,0.1);
&:nth-of-type(even) {
background: rgba(255,255,255,.7);
}
&:nth-of-type(odd) {
    background: rgba(255,255,255,.9);
    }
&:hover {
    text-shadow: 0 0 2px white,
                0 0 5px white,
                0 0 10px white,
                0 0 15px white,
                0 0 20px black,
                0 0 25px black,
                0 0 30px black,
                0 0 40px black; 
}
`;

export const Head = styled.thead`
border-bottom: 5px solid rgba(255,255,255,0.3);
// background: rgba(255,255,255,0.5);
background: rgba(0,0,0,1);
`;

export const Labels = styled.th`
color: white;
background-color: rgba(0,0,0,0.5);
text-align: left;
font-weight: 700;
padding: 10px 12px;
font-size: 12px;
`;

export const Body = styled.tbody`
`;

export const Data = styled.td`
padding: 10px 12px;
color: black;
font-size: 10px;
`;


export const TButton = styled.p`
font-size:20px;
margin-top: 30px;
margin-left: auto;
margin-right: auto;
// background-color: rgba(255,255,255,0);
background-color: black;
text-decoration: none;
border-radius: 15px;
box-shadow: 10px 10px 20px rgba(0,0,0,0.5);
border: none;
border-top: 1px solid rgba(255,255,255,0.5);
border-left: 1px solid rgba(255,255,255,0.5);
padding: 5px 25px;
text-align: center;
width: 200px;
&:hover {
// box-shadow: 0 0 5px  white,
//             0 0 15px  white,
//             0 0 30px  white,
//             0 0 60px  white;
box-shadow: 0 0 5px  black,
            0 0 15px  black,
            0 0 30px  black,
            0 0 60px  black;
}
`;