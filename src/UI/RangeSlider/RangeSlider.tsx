import React, { useEffect, useState } from "react";
import classes from "./RangeSlider.module.css";
import noUiSlider from "nouislider";
import "./RangNouislider.css";


const RangeSlider = (props) => {
  const [range0, setRange0] = useState(1499);
  const [range1, setRange1] = useState(45999);
  
  const formatNumber = (num) => {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
  };

  const parseNumber = (str) => {
    return parseInt(str.replace(/\s/g, '')) || 0;
  };

  useEffect(() => {
    props.handlePrice_range(range0, range1);
  }, [range0, range1]);

  useEffect(() => {
    const rangeSlider = document.getElementById("range-slider");
    const input0 = document.getElementById("input-0");
    const input1 = document.getElementById("input-1");

    if (rangeSlider && input0 && input1) {
      input0.value = formatNumber(range0);
      input1.value = formatNumber(range1);

      noUiSlider.create(rangeSlider, {
        start: [range0, range1],
        connect: true,
        step: 1,
        range: {
          min: [1499],
          max: [45999]
        }
      });

      rangeSlider.noUiSlider.on("update", (values, handle) => {
        const numValue = Math.round(values[handle]);
        if (handle === 0) {
          input0.value = formatNumber(numValue);
        } else {
          input1.value = formatNumber(numValue);
        }
      });

      rangeSlider.noUiSlider.on("change", (values, handle) => {
        const numValue = Math.round(values[handle]);
        if (handle === 0) {
          setRange0(numValue);
        } else {
          setRange1(numValue);
        }
      });

      const setRangeSlider = (i, value) => {
        let arr = [null, null];
        arr[i] = value;
        rangeSlider.noUiSlider.set(arr);
      };

      input0.addEventListener("change", (e) => {
        const numValue = parseNumber(e.target.value);
        if (numValue >= 1499 && numValue <= range1) {
          setRange0(numValue);
          setRangeSlider(0, numValue);
          e.target.value = formatNumber(numValue);
        } else {
          e.target.value = formatNumber(range0);
        }
      });

      input1.addEventListener("change", (e) => {
        const numValue = parseNumber(e.target.value);
        if (numValue <= 45999 && numValue >= range0) {
          setRange1(numValue);
          setRangeSlider(1, numValue);
          e.target.value = formatNumber(numValue);
        } else {
          e.target.value = formatNumber(range1);
        }
      });
    }

    return () => {
      if (rangeSlider?.noUiSlider) {
        rangeSlider.noUiSlider.destroy();
      }
    };
  }, []);

  return (
    <div className={classes.filters}>
      <div className={`${classes.filtersitem} ${classes.price}`}>
        <h3 className={classes.pricetitle}>Цена:</h3>
        <div className={classes.priceslider} id="range-slider"></div>
        <div className={classes.priceinputs}>
          <input
            type="text"  // Изменено с number на text
            min="1499"
            max="45999"
            placeholder="1 499"
            className={classes.priceinput}
            id="input-0"
          />
          <div className={classes.inputsSeparatorWrapper}>
            <span className={classes.inputsSeparator}></span>
          </div>
          <input
            type="text"  // Изменено с number на text
            min="1499"
            max="45999"
            placeholder="45 999"
            className={classes.priceinput}
            id="input-1"
          />
        </div>
      </div>
    </div>
  );
};

export default RangeSlider;