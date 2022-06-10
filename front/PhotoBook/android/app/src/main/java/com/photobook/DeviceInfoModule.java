package com.photobook;

import com.facebook.react.bridge.NativeModule;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.bridge.Promise;

import android.util.Log;

import java.util.Map;
import java.util.HashMap;

public class DeviceInfoModule extends ReactContextBaseJavaModule {
    DeviceInfoModule(ReactApplicationContext context) {
        super(context);
    }

    @Override
    public String getName() {
        return "DeviceInfoModule";
    }

    @ReactMethod
    public void getUniqueId(String name, Promise promise) {
        Log.d("DeviceInfoModule", "name: " + name);
        if("zut".equals(name)) {
            promise.reject("34", "c'est bien fait!");
            return;
        }
        promise.resolve("titi");
    }
}