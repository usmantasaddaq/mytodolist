import React, { useEffect } from "react";
import { useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Badge from "@mui/material/Badge";
import Nav from "react-bootstrap/Nav";
import Menu from "@material-ui/core/Menu";
import Table from "react-bootstrap/Table";
import MenuItem from "@material-ui/core/MenuItem";
import {NavLink} from "react-router-dom";
import CardsDetail from "./CardsDetail";
import { useDispatch, useSelector } from "react-redux";
import { DLT } from "../redux/actions/action";

function Header() {
  const[price, setPrice]=useState(0)
  const [anchorEl, setAnchorEl] = useState(null);
  const getdata = useSelector((state)=> state.cartreducer.carts);

 const dispatch = useDispatch();



  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    
    setAnchorEl(null);
  };

const dlt = (id)=>{
  dispatch(DLT(id))
}
const total =()=>{
  let price =0;
  getdata.map((ele,k)=>{
    price =ele.price*ele.qnty + price
  })
  setPrice(price)
}
useEffect(()=>{
  total()
},[total])


  return (
    <>
      <Navbar bg="dark" variant="dark" style={{ height: "60px" }}>
        <Container>
          <NavLink to="/" className="text-decoration-none text-light mx-3">
            Add to Carts
          </NavLink>
          <Nav className="me-auto">
            <Nav.Link to="/" className="text-decoration-none text-light">
              Home
            </Nav.Link>
          </Nav>
          <Badge  badgeContent={getdata.length} color="primary"
                        id="basic-button"
                        aria-controls={open ? 'basic-menu' : undefined}
                        aria-haspopup="true"
                        aria-expanded={open ? 'true' : undefined}
                        onClick={handleClick}
                    >
                        <i class="fa-solid fa-cart-shopping text-light" style={{ fontSize: 25, cursor: "pointer" }}></i>
                    </Badge>

        </Container>
        <Menu
          id="demo-positioned-menu"
          aria-labelledby="demo-positioned-button"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          anchorOrigin={{
            vertical: "top",
            horizontal: "left",
          }}
          transformOrigin={{
            vertical: "top",
            horizontal: "left",
          }}
        >

                           
          {
            getdata.length?
            <div className="card_details" style={{width:"24rem",padding:"10" }}>
              <Table>
                <thead>
                  <tr>
                    <th>Photo</th>
                    <th>Restaurant Name</th>

                  </tr>
                </thead>
                <tbody>
                  {
                    getdata.map((e)=>(
                      <>
                      <tr>
                        <td>
                          <NavLink to={`/cart/${e.id}`} onClick={handleClose}> <img src={e.imgdata} style={{width:'5rem', height:'5rem'}} alt=''/></NavLink>
                       
                        </td>
                        <td>
                          <p>{e.rname}</p>
                          <p>Price:₹ {e.price}</p>
                          <p>Quantity: {e.qnty}</p>
                          <p onClick={()=>{dlt(e.id)}}><i className="fas fa-trash smalltrash" style={{color:"red", fontSize: 20,cursor:"pointer"}}></i></p>
                        </td>
                        <td className="mt-5">
                        <p onClick={()=>{dlt(e.id)}}><i className="fas fa-trash largetrash" style={{color:"red", fontSize: 20,cursor:"pointer"}}></i></p>
                        </td>
                      </tr>
                     
                      </>
                    ))
                  }
                </tbody>
                <p className="text-center">Total:₹{price}</p>
              </Table>
            </div>:
            <div className="card_details d-flex justify-content-center align-items-center" style={{width:"24rem", padding:10,position:"relative"}}>
            <i className="fas fa-close smallclose" 
            onClick={handleClose}
            style={{position:"absolute", top:2,right:20,fontSize:23,cursor:"pointer"}}></i>
            <p>Your Carts is empty</p>
            <img src="./cart.gif" alt="" className="emptycart_img" style={{width:"5rem", padding:10}}/>
          </div>
          }          
          
          
        </Menu>
      </Navbar>
    </>
  );
}

export default Header;
