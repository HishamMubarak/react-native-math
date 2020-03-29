package com.RNMath;

import android.content.Context;
import android.graphics.Color;
import android.util.AttributeSet;
import android.view.View;
import android.widget.Button;

import katex.hourglass.in.mathlib.MathView;

import com.facebook.react.bridge.Arguments;
import com.facebook.react.bridge.ReactContext;

public class MathComponent extends MathView {

    public String mathString = "";

    public void setString (String mathText){
        mathString = mathText;
        updateText();
    }

    public MathComponent(Context context) {
        super(context);
//        this.setTextColor(Color.BLUE);
//        this.setText();
//        this.setDisplayText(mathString);
//        this.setDisplayText(getResources().getString(R.string.runtime_formula));
//        this.setTextAlignment(View.TEXT_ALIGNMENT_CENTER);
        this.setClickable(true);
        this.setTextSize(14);
        this.setTextColor(android.R.color.white);
        this.setViewBackgroundColor(android.R.color.black);
        updateText();
    }

    public MathComponent(Context context, AttributeSet attrs) {
        super(context, attrs);
    }

    private void updateText() {
        setDisplayText(mathString);
    }

}
