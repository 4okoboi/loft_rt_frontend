import React from "react";
import classes from "./RangeSlider.module.css";
import arrowDown from "../../assets/images/for_home/arrowDown.svg"

const RangeSlider = () =>{
    return(
        <div className={classes.filters}>
	        <div className={classes.filters__item && classes.price}>
	        	<h3 className={classes.price__title}>Цена</h3>
	        	<div className={classes.price__slider} id="range-slider"></div>
	        	<div className={classes.price__inputs}>
	        		<label className={classes.price__label}>
	        			<span className={classes.price__text}>от</span>
	        			<input 
                            type="number" 
                            min="500" 
                            max="999999" 
                            placeholder="500" 
                            className={classes.price__input} 
                            id="input-0"
                        />
	        			<span className={classes.price__text}>₽</span>
	        		</label>
	        		<label className={classes.price__label}>
	        			<span className={classes.price__text}>до</span>
	        			<input 
                            type="number" 
                            min="500" 
                            max="999999" 
                            placeholder="999999" 
                            className={classes.price__input} 
                            id="input-1"
                        />
	        			<span className={classes.price__text}>₽</span>
	        		</label>
	        	</div>
	        </div>
        </div>
    );
};

export default RangeSlider;