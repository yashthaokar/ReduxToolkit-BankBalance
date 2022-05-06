import React from 'react'
import '../src/Show.css'
import Button from "@mui/material/Button";
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment } from './showSlice'
import {BiRupee } from "react-icons/bi";
import {MdAccountBalanceWallet} from 'react-icons/md'
import {FaBalanceScaleRight} from 'react-icons/fa'




const Show = () => {
    const count = useSelector((state) => state.counter.value)
    const dispatch = useDispatch()

    return (
        <div className="show">
            <div className="main">
                <div className='container__img'>
                    <div className="profile"><MdAccountBalanceWallet/>
                        <h3>Name- Yash Thaokar</h3>
                        <h5>Account no- 6372**********90</h5>
                        <h5>Branch- Pune city</h5>
                        <h5>IFSC code- Sbi*****</h5>

                    </div>

                    <div className="image">
                        <img src=" https://store-images.s-microsoft.com/image/apps.28081.9007199267202329.cc86222e-eed7-4604-a58e-0b02f0297f67.ed0faa69-a88d-40d0-91b3-c05d2b96770b?mode=scale&q=90&h=300&w=100" alt="customer_image" />

                    </div>
                </div>
            

            <div className='money'>
            <FaBalanceScaleRight/> <h1>Balance </h1>
                <h1><BiRupee/>{count}</h1>
            </div>
            </div>
            <div className="container">
                <div className="btn">
                    <Button className="btn1" variant="contained" onClick={() => dispatch(increment())}>WITHDRAW <BiRupee/>10,000</Button>
                </div>
                <div className="btn">
                    <Button variant="contained" onClick={() => dispatch(decrement())}>WITHDRAW <BiRupee/>5,000</Button>
                </div>
            </div>

        </div>
    )
}

export default Show;