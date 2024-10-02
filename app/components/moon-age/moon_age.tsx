"use client";
import React, { useEffect, useState } from "react";
import { getNMs } from "../../index";

const Moon: React.FC = () => {
  const data = getNMs();
  const [ma, setMaValue] = useState<number>(data.man);
  useEffect(() => {
    const intervalId = setInterval(() => {
      setMaValue(getNMs().man);
    }, 60000);
    return () => clearInterval(intervalId);
  }, []);
  return (
    <div>
      <table>
        <tbody>
          <tr>
            <td>Moon Age</td>
            <td>{ma}</td>
          </tr>
          <tr>
            <td>Next New Moon</td>
            <td>{data.nnmStr}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Moon;
