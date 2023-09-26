// import React, { useEffect, useState } from 'react';
// import UAParser from 'ua-parser-js';

// function UserInfo() {
//   const [browserName, setBrowserName] = useState('');
//   const [browserVersion, setBrowserVersion] = useState('');
//   const [osName, setOsName] = useState('');
//   const [deviceType, setDeviceType] = useState('');
//   //const SystemInfo = require('./system_info'); // Adjust the path as needed

  

//   useEffect(() => {
//     const userAgentParser = new UAParser();

//     const userAgentData = userAgentParser.getResult();

//     setBrowserName(userAgentData.browser.name);
//     setBrowserVersion(userAgentData.browser.version);
//     setOsName(userAgentData.os.name);
//     setDeviceType(userAgentData.device.type);

//     fetch('/api/user-agent', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify({
//         browserName,
//         browserVersion,
//         osName,
//         deviceType,
//       }),
//     });
  
    
//   },
//    []
//    );


//   return (
//     <div>
//       <h1>User Agent Information</h1>
//       <p>Browser: {browserName}</p>
//       <p> browserVersion:{browserVersion}</p>
//       <p>OS: {osName}</p>
//       <p>Device Type: {deviceType}</p>
//     </div>
//   );
// }

// export default UserInfo;

import React, { useEffect, useState } from 'react';
import UAParser from 'ua-parser-js';

function UserInfo() {
  const [browserName, setBrowserName] = useState('');
  const [browserVersion, setBrowserVersion] = useState('');
  const [osName, setOsName] = useState('');
  const [deviceType, setDeviceType] = useState('');
  const [ipAddress, setIpAddress] = useState('');

  // useEffect(() => {
  //   const userAgentParser = new UAParser();

  //   const userAgentData = userAgentParser.getResult();

  //   setBrowserName(userAgentData.browser.name);
  //   setBrowserVersion(userAgentData.browser.version);
  //   setOsName(userAgentData.os.name);
  //   setDeviceType(userAgentData.device.type);

  //   // Fetch user's IP address from ipinfo.io
  //   fetch('https://ipinfo.io/json')
  //     .then((response) => response.json())
  //     .then((data) => {
  //       setIpAddress(data.ip);
  //     })
  //     .catch((error) => {
  //       console.error('Error fetching IP address:', error);
  //     });
      
  //   fetch('/api/user-agent', {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/json',
  //     },
  //     body: JSON.stringify({
  //       browserName,
  //       browserVersion,
  //       osName,
  //       deviceType,
  //       ipAddress, // Include the IP address in the request
  //     }),
  //   });
  // }, []);
  useEffect(() => {
    const userAgentParser = new UAParser();
  
    const userAgentData = userAgentParser.getResult();
  
    setBrowserName(userAgentData.browser.name);
    setBrowserVersion(userAgentData.browser.version);
    setOsName(userAgentData.os.name);
    setDeviceType(userAgentData.device.type);
  
    // Fetch user's IP address from ipinfo.io
    fetch('https://ipinfo.io/json')
      .then((response) => response.json())
      .then((data) => {
        console.log('IP Address:', data.ip);
        setIpAddress(data.ip);
      })
      .catch((error) => {
        console.error('Error fetching IP address:', error);
      });
  
    // Send user agent information to your server or API
      // Fetch user's IP address from ipinfo.io
fetch('https://ipinfo.io/json')
.then((response) => {
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  return response.json();
})
.then((data) => {
  console.log('IP Address:', data.ip);
  setIpAddress(data.ip);
})
.catch((error) => {
  console.error('Error fetching IP address:', error);
});


    fetch('/api/user-agent', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        browserName,
        browserVersion,
        osName,
        deviceType,
        ipAddress, // Include the IP address in the request
      }),
    });
  }, []);
  

  return (
    <div>
      <h1>User Agent Information</h1>
      <p>Browser: {browserName}</p>
      <p>Browser Version: {browserVersion}</p>
      <p>OS: {osName}</p>
      <p>Device Type: {deviceType}</p>
      <p>IP Address: {ipAddress}</p>
    </div>
  );
}

export default UserInfo;
