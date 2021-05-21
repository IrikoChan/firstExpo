// function foo(){
//     alert('foo');
// }

//เรียกใช้ฟังก์ชั่นใส่onClick
//<button onclick="foo()">click me!</button>

// const [countBox, setCountBox] = useState<number>(0);
// //and set it as
// setCount(countBox + 1)

import React, { useEffect, useState } from 'react'
import MiniButton from '../MiniButton'
import { AntDesign } from '@expo/vector-icons';

interface IProps {
    count: number;
    hasLiked: boolean;
}

const LikeButton = ({count, hasLiked}:IProps) => {
    const [like, setLike] = useState(0);
    const [isActive, setActive] = useState(false);

    console.log(count,hasLiked);
    useEffect(() => {
        setLike(count)
    }, [count])

    useEffect(() => {
        setActive(hasLiked)
    }, [hasLiked])

    const likeAction = () => {
        if (!isActive) {
            setLike((prevState) => prevState + 1);
            setActive(true)
        }
        else {
            setLike((prevState) => prevState - 1);
            setActive(false)
        }
    }
    return <MiniButton  onPress={likeAction} 
                        testID="likeBtn"
                        title={`${like}`} 
                        />
}

// export const example = () => {
//     console.log('example')
// }

export default LikeButton