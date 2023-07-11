package com.rtnsample;

import androidx.annotation.NonNull;
import com.facebook.react.bridge.NativeModule;
import com.facebook.react.bridge.Promise;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import java.util.Map;
import java.util.HashMap;
import com.rtnsample.NativeSampleSpec;

public class SampleModule extends NativeSampleSpec {

    public static String NAME = "RTNSample";

    SampleModule(ReactApplicationContext context) {
        super(context);
    }

    @Override
    @NonNull
    public String getName() {
        return NAME;
    }

    @Override
    public void getPeerName(String a, Promise promise) {
        Log.d("getPeerName", "true");
        promise.resolve(a);
    }
}