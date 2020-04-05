package com.RNMath;
import com.facebook.react.uimanager.SimpleViewManager;
import com.facebook.react.uimanager.ViewGroupManager;
import com.facebook.react.uimanager.ThemedReactContext;
import com.facebook.react.uimanager.annotations.ReactProp;


public class MathViewManager extends SimpleViewManager<MathComponent> {


    @ReactProp(name="value")
    public void setString(MathComponent mathComponent, String value) {
        mathComponent.setString(value);
    }

    @ReactProp(name="textSize")
    public void setFontSize(MathComponent mathComponent, Integer textSize) {
        mathComponent.setFontSize(textSize);
    }

    @ReactProp(name="textColor")
    public void setColor(MathComponent mathComponent, String textColor) {
        mathComponent.setColor(textColor);
    }

    @Override
    public String getName() {
        return "MathComponent";
    }


    @Override
    protected MathComponent createViewInstance(ThemedReactContext reactContext) {

        return new MathComponent(reactContext);

    }

}