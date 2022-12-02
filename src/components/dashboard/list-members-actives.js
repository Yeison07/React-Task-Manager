import CardMember from "../cardmember/card-member";
import { TitleS } from "../cardProject/style";
import { Container } from "../container/style";
import Footer from "../footer/footer";
import { Color } from "../../App/shared/styles/style";
import React, { useState, useEffect } from 'react';
import { helpHttp } from "../../App/shared/utils/helpHttp";



const ListMembersActive = () => {
    const [data, setData] = useState([]);
    let api= helpHttp();
    let url = "http://localhost:9000/api/users"

    useEffect(() => {
        api
          .get(url)
          .then((res) => {
            console.log( res);
            if (res.err) {
                setData(res)
              console.log(data)
            } else {
                setData(null)
            }
          });
      }, []);


    return (
        <>
            <Container direction="column">
                <Container direction="column" align="flex-start" height="auto">
                    <div style={{ margin: "1em 0em 1em 5em" }}>
                        <TitleS>Los siguientes miembros se encuentran activos en el semillero</TitleS>
                        <hr style={{ border: `2px solid ${Color.primary}` }} />
                    </div>
                </Container>
                <Container wrap="wrap" bgcolor="#fff" width="90%">
                    
                    {data===null ? <p>Estamos experimentando problemas, por favor intenta más tarde</p> :
                        data.map((el) => <CardMember key={el.id} data={el} />)}

                </Container>
                <Footer></Footer>
            </Container>
        </>
    );
}

export default ListMembersActive;