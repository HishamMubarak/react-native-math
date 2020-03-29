package com.RNMath;
import com.facebook.react.uimanager.SimpleViewManager;
import com.facebook.react.uimanager.ThemedReactContext;
import com.facebook.react.uimanager.annotations.ReactProp;

public class MathViewManager extends SimpleViewManager<MathComponent> {

    @ReactProp(name="mathText")
    public void setInitialString(MathComponent mathComponent, String mathText) {
        mathComponent.setString(mathText);
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