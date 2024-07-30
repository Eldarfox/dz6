import React, {useState} from 'react';
import {Container} from "@mui/material";
import TabsComponent from "../components/tabs";
import {SwiperComponent} from "../components/Swiper";
import {SwiperComponent2} from "../components/Swiper2";
import {SwiperComponent3} from "../components/Swiper3";
import {SwiperComponent4} from "../components/Swiper4";
import {SwiperComponent5} from "../components/Swiper5";
const VALUES = {
    oneItem: 'One',
    twoItem: 'Two',
    threeItem: 'Three',
    fourItem: 'Four',
    fiveItem: 'Five'
}
const Main = () => {
    const categoriesSelect = [
        {value: VALUES.oneItem , label: 'one'},
        {value: VALUES.twoItem , label: 'two'},
        {value: VALUES.threeItem , label: 'three'},
        {value: VALUES.fourItem , label: 'four'},
        {value: VALUES.fiveItem , label: 'five'},
    ]
    const GetCategories = ({value}) => {
        switch (value){
            case VALUES.oneItem: {
                return <SwiperComponent swiperImage={swiperImages}/>
            }
            case VALUES.twoItem: {
                return <SwiperComponent2 swiperImage={swiperImages}/>
            }
            case VALUES.threeItem: {
                return <SwiperComponent3 swiperImage={swiperImages}/>
            }
            case VALUES.fourItem: {
                return <SwiperComponent4 swiperImage={swiperImages}/>
            }
            case VALUES.fiveItem: {
                return <SwiperComponent5 swiperImage={swiperImages}/>
            }
            default: return <></>
        }
    }
    const [value, setValue] = useState(categoriesSelect[0].value)
    const swiperImages = [
        {url:"https://swiperjs.com/demos/images/nature-1.jpg"},
        {url:"https://swiperjs.com/demos/images/nature-2.jpg"},
        {url:"https://swiperjs.com/demos/images/nature-3.jpg"},
        {url:"https://swiperjs.com/demos/images/nature-4.jpg"},
        {url:"https://swiperjs.com/demos/images/nature-5.jpg"},
    ]
    return (
        <Container>
            <TabsComponent categoriesSelect={categoriesSelect} value={value} setValue={setValue}/>
            <GetCategories value={value}/>
        </Container>
    );
};

export default Main;