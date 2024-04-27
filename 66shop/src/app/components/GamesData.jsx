"use client"
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import jsonData from './mygames.json'; // นำเข้าข้อมูล JSON จากไฟล์

function GamesData() {
    const [game, setGame] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        // เรียกใช้ setTimeout เพื่อจำลองการโหลดข้อมูลจากไฟล์ JSON
        setTimeout(() => {
            setGame(jsonData.games);
            setLoading(false);
        }, 200);
    }, []);

    return (
        <div className='container text-center mx-auto'>
            <div className='text-center mx-auto text-6xl m-5 rounded-md bg-white font-extrabold antialiased' style={{ display: 'inline-block', padding: '10px' }}>
                30 เกมที่กำลังเป็นกระแสนิยมในตอนนี้บน STEAM
            </div>

            {loading ? (
                <p>Loading...</p>
            ) : (
                <div className='grid grid-cols-5 content-center'>
                    {game.map((val, index) => (
                        //<Link key={val.name} href={`/pokeinfo/${index + 1}`}>
                        <div key={index} className='flex flex-col justify-center items-center shadow-md transition cursor-pointer hover:shadow-lg m-2 rounded-md bg-white'>
                            <div className='m-2 line-clamp-1'>
                                <h4>{val.name}</h4>
                            </div>
                            <div className='mb-2 relative flex flex-row-reverse text-white transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-110 duration-300'>
                                <Image src={val.img} width={150} height={150} alt={val.name} />
                                {val.discount > 0 && (
                                    <span className='bg-red-600 shadow-md text-white font-quantico text-sm px-3 py-2 absolute top-0 right-0 z-50'>{val.discount}%</span>
                                )}
                            </div>
                            <div className='mb-2'>
                                {val.discount > 0 ? (
                                    <div>
                                        <div><price>ราคาเต็ม {val.price} บาท</price></div>
                                        <div><discount>ลด {val.discount} % เหลือ {(val.price - ((val.price / 100) * val.discount)).toFixed(2)} บาท</discount></div>
                                    </div>
                                ) : (
                                    <div>
                                        <div><price>ราคา {val.price} บาท</price></div>
                                        <br />
                                    </div>
                                )}
                                <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
                                    สั่งซื้อ
                                </button>

                                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ml-2">
                                    รายะลเอียด
                                </button>
                            </div>
                        </div>
                        //</Link>
                    ))}
                </div>
            )}
        </div>
    );
}

export default GamesData;
