import { Container } from "../container/style";
import imgUrl from "../../App/assets/images/profile_pic.jpg"
import { BoardS, TaskS } from "./style";
import { Color } from "../../App/shared/styles/style";
import React, { useState, useEffect } from 'react';


const BoardProject = () => {
    
    return ( 
        <Container height="auto" bgcolor={Color.backgroundLight} direction="column" justify="flex-start">
            
            <Container justify="flex-start" align="flex-start" direction="column" height="auto">
            <p>Projects / project1 / Board</p>
                <div>
                    <img width="50" src={imgUrl} alt=""  />
                    <img width="50" src={imgUrl} alt=""  />
                    <img width="50" src={imgUrl} alt=""  />
                    
                </div>
                <p>Only my tasks</p>
                
            </Container>
            
            <Container align="flex-start" height="auto" wrap="wrap">
                <BoardS>
                    BACKLOG
                    <TaskS>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis provident possimus ratione dicta aliquid non harum odit ut. Ex vero illum amet laudantium ea minus ab qui reiciendis, consequuntur necessitatibus?</p>
                        <img width="20" src={imgUrl} alt=""  />
                        <img width="20" src={imgUrl} alt=""  />
                        <img width="20" src={imgUrl} alt=""  />
                    </TaskS>
                    <TaskS>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis provident possimus ratione dicta aliquid non harum odit ut. Ex vero illum amet laudantium ea minus ab qui reiciendis, consequuntur necessitatibus?</p>
                        <img width="20" src={imgUrl} alt=""  />
                        <img width="20" src={imgUrl} alt=""  />
                        <img width="20" src={imgUrl} alt=""  />
                    </TaskS>
                    <TaskS>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis provident possimus ratione dicta aliquid non harum odit ut. Ex vero illum amet laudantium ea minus ab qui reiciendis, consequuntur necessitatibus?</p>
                        <img width="20" src={imgUrl} alt=""  />
                        <img width="20" src={imgUrl} alt=""  />
                        <img width="20" src={imgUrl} alt=""  />
                    </TaskS>
                </BoardS>
                <BoardS>
                    ASIGNADA
                    <TaskS>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis provident possimus ratione dicta aliquid non harum odit ut. Ex vero illum amet laudantium ea minus ab qui reiciendis, consequuntur necessitatibus?</p>
                        <img width="20" src={imgUrl} alt=""  />
                        <img width="20" src={imgUrl} alt=""  />
                        <img width="20" src={imgUrl} alt=""  />
                    </TaskS>
                    <TaskS>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis provident possimus ratione dicta aliquid non harum odit ut. Ex vero illum amet laudantium ea minus ab qui reiciendis, consequuntur necessitatibus?</p>
                        <img width="20" src={imgUrl} alt=""  />
                        <img width="20" src={imgUrl} alt=""  />
                        <img width="20" src={imgUrl} alt=""  />
                    </TaskS>
                </BoardS>
                <BoardS>
                    EN PROCESO
                    <TaskS>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis provident possimus ratione dicta aliquid non harum odit ut. Ex vero illum amet laudantium ea minus ab qui reiciendis, consequuntur necessitatibus?</p>
                        <img width="20" src={imgUrl} alt=""  />
                        <img width="20" src={imgUrl} alt=""  />
                        <img width="20" src={imgUrl} alt=""  />
                    </TaskS>
                </BoardS>
                <BoardS>
                    COMPLETA
                    <TaskS>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis provident possimus ratione dicta aliquid non harum odit ut. Ex vero illum amet laudantium ea minus ab qui reiciendis, consequuntur necessitatibus?</p>
                        <img width="20" src={imgUrl} alt=""  />
                        <img width="20" src={imgUrl} alt=""  />
                        <img width="20" src={imgUrl} alt=""  />
                    </TaskS>
                    <TaskS>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis provident possimus ratione dicta aliquid non harum odit ut. Ex vero illum amet laudantium ea minus ab qui reiciendis, consequuntur necessitatibus?</p>
                        <img width="20" src={imgUrl} alt=""  />
                        <img width="20" src={imgUrl} alt=""  />
                        <img width="20" src={imgUrl} alt=""  />
                    </TaskS>
                    <TaskS>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis provident possimus ratione dicta aliquid non harum odit ut. Ex vero illum amet laudantium ea minus ab qui reiciendis, consequuntur necessitatibus?</p>
                        <img width="20" src={imgUrl} alt=""  />
                        <img width="20" src={imgUrl} alt=""  />
                        <img width="20" src={imgUrl} alt=""  />
                    </TaskS>
                    <TaskS>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis provident possimus ratione dicta aliquid non harum odit ut. Ex vero illum amet laudantium ea minus ab qui reiciendis, consequuntur necessitatibus?</p>
                        <img width="20" src={imgUrl} alt=""  />
                        <img width="20" src={imgUrl} alt=""  />
                        <img width="20" src={imgUrl} alt=""  />
                    </TaskS>
                    <TaskS>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis provident possimus ratione dicta aliquid non harum odit ut. Ex vero illum amet laudantium ea minus ab qui reiciendis, consequuntur necessitatibus?</p>
                        <img width="20" src={imgUrl} alt=""  />
                        <img width="20" src={imgUrl} alt=""  />
                        <img width="20" src={imgUrl} alt=""  />
                    </TaskS>
                </BoardS>
            </Container>
            
        </Container>
     );
}
 
export default BoardProject;