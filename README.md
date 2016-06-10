# driving-bb-8
## The adventures of Gery and BB-8 as we explore cylon.js

### Windows Machines
On Windows machines we must make sure that the correct USB drivers are installed for our BLE: [Reference](https://github.com/orbotix/sphero.js/issues/26)
* Install official driver that comes with the dongle
* Download [Zadig USB drive](http://zadig.akeo.ie/) installer
* Run the program, select options -> list all devices
* Select BCM20702A0 (the bluetooth device) from the dropdown
* At driver section select WinUSB
* Click replace driver.

### Initial Setup:
* requires Python >= v2.5.0 & < 3.0.0
* npm install -g cylon
* npm install -g cylon-ble --msvs_version=2012
* npm install cylon cylon-ble cylon-sphero-ble --msvs_version=2012

### Running:
* run command cylon-ble-scan
* find BB UUID
* plug into code