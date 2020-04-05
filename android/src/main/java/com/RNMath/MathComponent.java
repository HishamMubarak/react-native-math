package com.RNMath;

import android.content.Context;
import android.graphics.Color;
import android.util.AttributeSet;
import android.view.Gravity;
import android.view.View;
import android.widget.Button;

import katex.hourglass.in.mathlib.MathView;

import com.facebook.react.bridge.Arguments;
import com.facebook.react.bridge.ReactContext;

public class MathComponent extends MathView {

    public String mathString = "";
    public Integer fontSize = 20;
    public String color = "#000000";

    public void setString (String mathText){
        mathString = mathText;
        updateText();
    }

    public void setFontSize (Integer textSize){
        fontSize = textSize;
        updateText();
    }

    public void setColor (String textColor) {
        color = textColor;
        updateText();
    }

    public MathComponent(Context context) {
        super(context);
    //    this.setClickable(true);
        updateText();
    }

    public MathComponent(Context context, AttributeSet attrs) {
        super(context, attrs);
    }

    private void updateText() {
        setTextSize(fontSize);
        setDisplayText(mathString);
        setTextColor(Color.parseColor(color));
    }

}
