import React, {useState } from 'react'
import styled from "styled-components"
import ProspCard from '../Route/ProspCard';

interface IData{
    todo:string;
    id:number;
    status:Boolean
    Describe:string;
    startDate:string;
    endDate:string;
    startTime:string;
    endTime:string;
}

const Hero = () => {
  const [todovalue, setTodovalue] = useState("");
  const [date1, setDate1] = useState("");
  const [date2, setDate2] = useState("");
  const [time1, setTime1] = useState("");
  const [time2, setTime2] = useState("");

  const [data, setData] = useState<IData[]>([]);

  const localData = JSON.parse(
    window.localStorage.getItem("codelabname") || ""
  );

  // created an id
  //creating  or adding  a task
  const AddnewTask = () => {
    const sortingRecentTask = (x: any) => {
      return (a: any, b: any) => {
        if (a[x] < b[x]) {
          return a[x];
        } else if (a[x] > b[x]) {
          return -1;
        }
        return 0;
      };
    };
    setData((prev) =>
      [
        ...prev,
        {
          id: data.length + 1,
          todo: todovalue,
          status: false,
          Describe: shortnote,
          startDate: date1,
          endDate: date2,
          startTime: time1,
          endTime:time2,
        },
      ].sort(sortingRecentTask("id"))
    );
    //...prev this is a spread operator it see our array
  };

  //Deleting a value
  const Deletingvalue = (id: number) => {
    let myFilter = data.filter((el) => el.id !== id);
    setData(myFilter);
  };

  //editing
  const [edit, setEdit] = useState(-1);
  const Editdata = (id: number) => {
    setEdit(id);
  };

  //caturing the textarea
  const [shortnote, setShortnote] = useState("");

  //Updating a task
  const [editButton , setEditButton] = useState(false)
  const [donebutton , setdonebutton] = useState(false)
  const doneState = () => {
setdonebutton(true)
  }
  const [updatingText, setUpdatingText]= useState("")
  

  const Updating = ()=>{
    setEditButton(!editButton)
  }

  const UpdatingText = ()=>{
    data[0].todo = updatingText
  }

  return (
    <Container>
      <h1>
        <i>Welcome {localData.toUpperCase()}</i>
      </h1>
      <p style={{color:"white"}}>Create the task for today</p>
      <Inputfield
        onChange={(e) => {
          setTodovalue(e.target.value);
        }}
        placeholder="Enter your task"
      />
      {/* <input type="time" />
      <br />
      <input type="date" /> */}
      {todovalue !== "" ? (
        <>
          <TimeHold>
            <Hold>
              <p>Start-Task</p>
              <input
                onChange={(e) => {
                  setDate1(e.target.value);
                }}
                type="date"
                style={{ marginBottom: "20px" }}
              />
              <input
                onChange={(e) => {
                  setTime1(e.target.value);
                }}
                type="time"
              />
            </Hold>

            <Hold>
              <p>End-Task</p>
              <input
                onChange={(e) => {
                  setDate2(e.target.value);
                }}
                type="date"
              />
              <input
                onChange={(e) => {
                  setTime2(e.target.value);
                }}
                type="time"
                style={{ marginTop: "20px" }}
              />
            </Hold>
          </TimeHold>
        </>
      ) : null}

      {todovalue !== "" ? (
        <Textarea
          onChange={(e) => {
            setShortnote(e.target.value);
          }}
          placeholder="Short note"
        />
      ) : null}

      {todovalue !== "" ? (
        <Button onClick={AddnewTask} bg="black">
          submit
        </Button>
      ) : (
        <Button bg="silver">submit</Button>
      )}
      <br />
      <br />
      <br />
      <h3>All Task</h3>

      <Cardhold>
        {data?.map((props) => (
          <Card>
            {props.id == edit && editButton ? (
              <input
                defaultValue={props.todo}
                onChange={(e) => {
                  setUpdatingText(e.target.value);
                }}
              />
            ) : (
              <Title>New-Text : {props.todo}</Title>
            )}
            <Description>Description : {props.Describe}</Description>

            <TimeHold>
              <Hold>
                <p
                  style={{
                    marginBottom: "-8px",
                    color: "black",
                    backgroundColor: "transparent",
                  }}
                >
                  Start-Task
                </p>
                <p style={{ marginBottom: "-15px" }}>{props.startDate}</p>
                <p>{props.startTime}</p>
              </Hold>

              <Hold>
                <p
                  style={{
                    marginBottom: "-8px",
                    color: "black",
                    backgroundColor: "transparent",
                  }}
                >
                  End-Task
                </p>
                <p style={{ marginBottom: "-15px", color: "white" }}>
                  {props.endDate}
                </p>
                <p>{props.endTime}</p>
              </Hold>
            </TimeHold>

            <Buthold>
              {props.id === edit && editButton ? (
                <button
                  onClick={() => {
                    Updating();
                    UpdatingText();
                    Editdata(props.id);
                  }}
                >
                  Update
                </button>
              ) : (
                <button
                  onClick={() => {
                    Updating();
                    Editdata(props.id);
                  }}
                >
                  edit
                </button>
              )}

              <button onClick={() =>{
                 Editdata(props.id);
                   doneState()
              }} >Done</button>

              <button
                onClick={() => {
                  Deletingvalue(props.id);
                }}
              >
                Delete
              </button>
            </Buthold>

            {props.id == edit && donebutton ? (
              <Done none="flex">
                <ProspCard />
              </Done>
            ) : (
              <Done none="none">
                <ProspCard />
              </Done>
            )}
          </Card>
        ))}
      </Cardhold>
    </Container>
  );
}

export default Hero;

const Done = styled.div<{none : string}>`
width: 100%;
height: 100%;
backdrop-filter: blur(5px);
justify-content: center;
top: 0;
align-items: center;
position: absolute;
display: ${(none) => none.none};
`

const Hold = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 35px;


  input{
    @media screen and (max-width: 500px) {
        margin-left: 30px;
    }
  }

  p {
    background-color: #000;
    height: 35px;
    border-radius: 5px;
    font-weight: 600;
    color: white;

    @media screen and (max-width: 500px) {
      margin-left: 40px;
    }
    width: 90px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;
const TimeHold = styled.div`
  margin-top: 30px;
  display: flex;
  /* border: 1px solid red; */

`;


const Description = styled.div``

const Textarea = styled.textarea`
  width: 300px;
  height: 100px;
  border: none;
  padding-left: 10px;
  border-radius: 5px;
  outline-color: #dcd9f8;
  transition: all 350ms;
  margin-top: 10px;
  resize: none;

  @media screen and (max-width: 500px) {
    /* margin-left: 45px; */
    padding: 0;
    width: 270px;
  }
`;

 const Cardhold = styled.div`
 display: flex;
 justify-content: center;
 align-items: center;
 flex-wrap: wrap;
 `; 
const Card = styled.div`
width: 300px;
/* height: 100px; */
display: flex;
box-shadow:rgba(0,0,0,0.1),0px, 4px 12px;
flex-direction: column;
align-items: left;
position: relative;
background-color: white;
text-align: left;
margin: 10px;

padding: 30px;
border-radius: 5px;

@media screen  {
    padding: 0px;
    
}

`
const Title = styled.div``
const Buthold = styled.div`
  button {
    margin-right: 5px;
    height: 30px;
    width: 90px;
    margin-top: 20px;
    cursor: pointer;
  }
`;

const Container = styled.div`
    display: flex;
    /* justify-content: center; */
    /* height: 100vh; */
    align-items: center;
    flex-direction: column;

    h1{
        color: white;
    }

    @media screen and (max-width: 500px){
        display: flex;
        align-items: center;
        flex-direction: column;
        margin: 0;
        padding: 0;
    }

    h3{
        color: #fff;
    }

`
const Inputfield = styled.input`
width: 400px;
height: 50px;
border:none;
padding-left: 10px;
border-radius: 5px;
outline-color: #dcd9f8;
transition: all 350ms;

@media screen and (max-width: 500px){
    width: 280px;
    /* margin-right: 20px; */
}
`
const Button = styled.button<{bg:string}>`
  width: 400px;
  height: 50px;
  border: none;
  margin-top: 20px;
  outline: none;
  background-color: ${(props)=>props.bg};
  color: white;
  border-radius: 20px;
  transition: all 350ms;
  cursor: pointer;
  font-size: 16px;

  :hover{
    transform: scale(0.98);
  }
@media screen and (max-width: 500px) {
    width: 270px;
    /* margin-left: 40px; */
}

  `