"use client";
import React, { useEffect, useState } from 'react';
import './calender.css';

const Page = () => {
  const [index, setIndex] = useState(null);
  const [day, setDay] = useState(null);
  const currentDate = new Date();
  const currentDay = currentDate.getDate();

  const handleClick = (clickedIndex) => {
    setIndex(clickedIndex);
    setDay(clickedIndex);
  };

  useEffect(() => {
    handleClick(currentDay);
  }, [currentDay]);

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col">
            <section>
              <div className="down">
                <p>Mo</p>
                <p>Tu</p>
                <p>We</p>
                <p>Th</p>
                <p>Fri</p>
                <p>Sa</p>
                <p>Su</p>
                {Array.from({ length: 31 }, (_, currentIndex) => (
                  <div className='cursor-pointer' key={currentIndex + 1}>
                    <div onClick={() => handleClick(currentIndex + 1)}
                    className={day === currentIndex + 1 ? "bg-primary":""}>
                      {index === currentIndex + 1 ? 
                        <div className='bg-primary'>{currentIndex + 1}</div> :
                        <div>{currentIndex + 1}</div>
                      }
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </div>
        </div>
      </div>
    </>
  );
};

export default Page;
