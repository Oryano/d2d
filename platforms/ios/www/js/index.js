/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
var app = {
    // Application Constructor
    initialize: function() {
        alert("Device Init");

        this.bindEvents();
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        //console.log("bindEvent");
        document.addEventListener('deviceready', this.onDeviceReady, false);
        console.log("bindEvent");
    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicitly call 'app.receivedEvent(...);'
    onDeviceReady: function() {
        console.log("Device Ready");
        app.receivedEvent('deviceready');
        app.takePicture();
    },
    // Update DOM on a Received Event
    receivedEvent: function(id) {
        var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');

        console.log('Received Event: ' + id);
    },
    //
    takePicture: function() {
        navigator.camera.getPicture(onSuccess, onFail, { quality: 50,
            destinationType: Camera.DestinationType.FILE_URI
        });
    },
    //
    onSuccess: function(imageData) {
    var image = document.getElementById('mypicture');
    //image.src = "data:image/jpeg;base64," + imageData;
    console.log(imageData);
    image.src = imageData;
    },
    //
    onFail: function(message) {
    alert('Failed because: ' + message);
    }
};

app.initialize();


// function onDeviceReady() {
//     alert("Device Ready");      
//     takePicture();
// }   

// function takePicture() {

//     navigator.camera.getPicture(onSuccess, onFail, { quality: 50,
//         destinationType: Camera.DestinationType.FILE_URI
//     });
// }

// function onSuccess(imageData) {
//     var image = document.getElementById('mypicture');
//     //image.src = "data:image/jpeg;base64," + imageData;
//     console.log(imageData);
//     image.src = imageData;

// }

// function onFail(message) {
//     alert('Failed because: ' + message);
// }

