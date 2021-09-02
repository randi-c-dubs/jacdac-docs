// Service: Common registers and commands
var SystemReadingThreshold;
(function (SystemReadingThreshold) {
    SystemReadingThreshold[SystemReadingThreshold["Neutral"] = 1] = "Neutral";
    SystemReadingThreshold[SystemReadingThreshold["Inactive"] = 2] = "Inactive";
    SystemReadingThreshold[SystemReadingThreshold["Active"] = 3] = "Active";
})(SystemReadingThreshold || (SystemReadingThreshold = {}));
var SystemStatusCodes;
(function (SystemStatusCodes) {
    SystemStatusCodes[SystemStatusCodes["Ready"] = 0] = "Ready";
    SystemStatusCodes[SystemStatusCodes["Initializing"] = 1] = "Initializing";
    SystemStatusCodes[SystemStatusCodes["Calibrating"] = 2] = "Calibrating";
    SystemStatusCodes[SystemStatusCodes["Sleeping"] = 3] = "Sleeping";
    SystemStatusCodes[SystemStatusCodes["WaitingForInput"] = 4] = "WaitingForInput";
    SystemStatusCodes[SystemStatusCodes["CalibrationNeeded"] = 100] = "CalibrationNeeded";
})(SystemStatusCodes || (SystemStatusCodes = {}));
var SystemCmd;
(function (SystemCmd) {
    /**
     * No args. Enumeration data for control service; service-specific advertisement data otherwise.
     * Control broadcasts it automatically every ``announce_interval``ms, but other service have to be queried to provide it.
     */
    SystemCmd[SystemCmd["Announce"] = 0] = "Announce";
    /**
     * No args. Registers number `N` is fetched by issuing command `0x1000 | N`.
     * The report format is the same as the format of the register.
     */
    SystemCmd[SystemCmd["GetRegister"] = 4096] = "GetRegister";
    /**
     * No args. Registers number `N` is set by issuing command `0x2000 | N`, with the format
     * the same as the format of the register.
     */
    SystemCmd[SystemCmd["SetRegister"] = 8192] = "SetRegister";
    /**
     * Event from sensor or a broadcast service.
     *
     * ```
     * const [eventId, eventArgument] = jdunpack<[number, number]>(buf, "u32 u32")
     * ```
     */
    SystemCmd[SystemCmd["Event"] = 1] = "Event";
    /**
     * No args. Request to calibrate a sensor. The report indicates the calibration is done.
     */
    SystemCmd[SystemCmd["Calibrate"] = 2] = "Calibrate";
})(SystemCmd || (SystemCmd = {}));
var SystemReg;
(function (SystemReg) {
    /**
     * Read-write uint32_t. This is either binary on/off (0 or non-zero), or can be gradual (eg. brightness of an RGB LED strip).
     *
     * ```
     * const [intensity] = jdunpack<[number]>(buf, "u32")
     * ```
     */
    SystemReg[SystemReg["Intensity"] = 1] = "Intensity";
    /**
     * Read-write int32_t. The primary value of actuator (eg. servo pulse length, or motor duty cycle).
     *
     * ```
     * const [value] = jdunpack<[number]>(buf, "i32")
     * ```
     */
    SystemReg[SystemReg["Value"] = 2] = "Value";
    /**
     * Constant int32_t. The lowest value that can be reported for the value register.
     *
     * ```
     * const [minValue] = jdunpack<[number]>(buf, "i32")
     * ```
     */
    SystemReg[SystemReg["MinValue"] = 272] = "MinValue";
    /**
     * Constant int32_t. The highest value that can be reported for the value register.
     *
     * ```
     * const [maxValue] = jdunpack<[number]>(buf, "i32")
     * ```
     */
    SystemReg[SystemReg["MaxValue"] = 273] = "MaxValue";
    /**
     * Read-write mA uint16_t. Limit the power drawn by the service, in mA.
     *
     * ```
     * const [maxPower] = jdunpack<[number]>(buf, "u16")
     * ```
     */
    SystemReg[SystemReg["MaxPower"] = 7] = "MaxPower";
    /**
     * Read-write # uint8_t. Asks device to stream a given number of samples
     * (clients will typically write `255` to this register every second or so, while streaming is required).
     *
     * ```
     * const [streamingSamples] = jdunpack<[number]>(buf, "u8")
     * ```
     */
    SystemReg[SystemReg["StreamingSamples"] = 3] = "StreamingSamples";
    /**
     * Read-write ms uint32_t. Period between packets of data when streaming in milliseconds.
     *
     * ```
     * const [streamingInterval] = jdunpack<[number]>(buf, "u32")
     * ```
     */
    SystemReg[SystemReg["StreamingInterval"] = 4] = "StreamingInterval";
    /**
     * Read-only int32_t. Read-only value of the sensor, also reported in streaming.
     *
     * ```
     * const [reading] = jdunpack<[number]>(buf, "i32")
     * ```
     */
    SystemReg[SystemReg["Reading"] = 257] = "Reading";
    /**
     * Constant int32_t. The lowest value that can be reported by the sensor.
     *
     * ```
     * const [minReading] = jdunpack<[number]>(buf, "i32")
     * ```
     */
    SystemReg[SystemReg["MinReading"] = 260] = "MinReading";
    /**
     * Constant int32_t. The highest value that can be reported by the sensor.
     *
     * ```
     * const [maxReading] = jdunpack<[number]>(buf, "i32")
     * ```
     */
    SystemReg[SystemReg["MaxReading"] = 261] = "MaxReading";
    /**
     * Read-only uint32_t. The real value of whatever is measured is between `reading - reading_error` and `reading + reading_error`. It should be computed from the internal state of the sensor. This register is often, but not always `const`. If the register value is modified,
     * send a report in the same frame of the ``reading`` report.
     *
     * ```
     * const [readingError] = jdunpack<[number]>(buf, "u32")
     * ```
     */
    SystemReg[SystemReg["ReadingError"] = 262] = "ReadingError";
    /**
     * Constant uint32_t. Smallest, yet distinguishable change in reading.
     *
     * ```
     * const [readingResolution] = jdunpack<[number]>(buf, "u32")
     * ```
     */
    SystemReg[SystemReg["ReadingResolution"] = 264] = "ReadingResolution";
    /**
     * Read-write int32_t. Threshold when reading data gets inactive and triggers a ``inactive``.
     *
     * ```
     * const [inactiveThreshold] = jdunpack<[number]>(buf, "i32")
     * ```
     */
    SystemReg[SystemReg["InactiveThreshold"] = 5] = "InactiveThreshold";
    /**
     * Read-write int32_t. Thresholds when reading data gets active and triggers a ``active`` event.
     *
     * ```
     * const [activeThreshold] = jdunpack<[number]>(buf, "i32")
     * ```
     */
    SystemReg[SystemReg["ActiveThreshold"] = 6] = "ActiveThreshold";
    /**
     * Constant ms uint32_t. Preferred default streaming interval for sensor in milliseconds.
     *
     * ```
     * const [streamingPreferredInterval] = jdunpack<[number]>(buf, "u32")
     * ```
     */
    SystemReg[SystemReg["StreamingPreferredInterval"] = 258] = "StreamingPreferredInterval";
    /**
     * Constant uint32_t. The hardware variant of the service.
     * For services which support this, there's an enum defining the meaning.
     *
     * ```
     * const [variant] = jdunpack<[number]>(buf, "u32")
     * ```
     */
    SystemReg[SystemReg["Variant"] = 263] = "Variant";
    /**
     * Reports the current state or error status of the device. ``code`` is a standardized value from
     * the Jacdac status/error codes. ``vendor_code`` is any vendor specific error code describing the device
     * state. This report is typically not queried, when a device has an error, it will typically
     * add this report in frame along with the announce packet.
     *
     * ```
     * const [code, vendorCode] = jdunpack<[SystemStatusCodes, number]>(buf, "u16 u16")
     * ```
     */
    SystemReg[SystemReg["StatusCode"] = 259] = "StatusCode";
    /**
     * Constant string (bytes). A friendly name that describes the role of this service instance in the device.
     *
     * ```
     * const [instanceName] = jdunpack<[string]>(buf, "s")
     * ```
     */
    SystemReg[SystemReg["InstanceName"] = 265] = "InstanceName";
})(SystemReg || (SystemReg = {}));
var SystemEvent;
(function (SystemEvent) {
    /**
     * Notifies that the service has been activated (eg. button pressed, network connected, etc.)
     */
    SystemEvent[SystemEvent["Active"] = 1] = "Active";
    /**
     * Notifies that the service has been dis-activated.
     */
    SystemEvent[SystemEvent["Inactive"] = 2] = "Inactive";
    /**
     * Notifies that the some state of the service changed.
     */
    SystemEvent[SystemEvent["Change"] = 3] = "Change";
    /**
     * Notifies that the status code of the service changed.
     *
     * ```
     * const [code, vendorCode] = jdunpack<[SystemStatusCodes, number]>(buf, "u16 u16")
     * ```
     */
    SystemEvent[SystemEvent["StatusCodeChanged"] = 4] = "StatusCodeChanged";
    /**
     * Notifies that the threshold is back between ``low`` and ``high``.
     */
    SystemEvent[SystemEvent["Neutral"] = 7] = "Neutral";
})(SystemEvent || (SystemEvent = {}));
// Service: Base service
var BaseReg;
(function (BaseReg) {
    /**
     * Constant string (bytes). A friendly name that describes the role of this service instance in the device.
     * It often corresponds to what's printed on the device:
     * for example, `A` for button A, or `S0` for servo channel 0.
     * Words like `left` should be avoided because of localization issues (unless they are printed on the device).
     *
     * ```
     * const [instanceName] = jdunpack<[string]>(buf, "s")
     * ```
     */
    BaseReg[BaseReg["InstanceName"] = 265] = "InstanceName";
    /**
     * Reports the current state or error status of the device. ``code`` is a standardized value from
     * the Jacdac status/error codes. ``vendor_code`` is any vendor specific error code describing the device
     * state. This report is typically not queried, when a device has an error, it will typically
     * add this report in frame along with the announce packet. If a service implements this register,
     * it should also support the ``status_code_changed`` event defined below.
     *
     * ```
     * const [code, vendorCode] = jdunpack<[number, number]>(buf, "u16 u16")
     * ```
     */
    BaseReg[BaseReg["StatusCode"] = 259] = "StatusCode";
})(BaseReg || (BaseReg = {}));
var BaseEvent;
(function (BaseEvent) {
    /**
     * Notifies that the status code of the service changed.
     *
     * ```
     * const [code, vendorCode] = jdunpack<[number, number]>(buf, "u16 u16")
     * ```
     */
    BaseEvent[BaseEvent["StatusCodeChanged"] = 4] = "StatusCodeChanged";
})(BaseEvent || (BaseEvent = {}));
// Service: Sensor
var SensorReg;
(function (SensorReg) {
    /**
     * Read-write # uint8_t. Asks device to stream a given number of samples
     * (clients will typically write `255` to this register every second or so, while streaming is required).
     *
     * ```
     * const [streamingSamples] = jdunpack<[number]>(buf, "u8")
     * ```
     */
    SensorReg[SensorReg["StreamingSamples"] = 3] = "StreamingSamples";
    /**
     * Read-write ms uint32_t. Period between packets of data when streaming in milliseconds.
     *
     * ```
     * const [streamingInterval] = jdunpack<[number]>(buf, "u32")
     * ```
     */
    SensorReg[SensorReg["StreamingInterval"] = 4] = "StreamingInterval";
    /**
     * Constant ms uint32_t. Preferred default streaming interval for sensor in milliseconds.
     *
     * ```
     * const [streamingPreferredInterval] = jdunpack<[number]>(buf, "u32")
     * ```
     */
    SensorReg[SensorReg["StreamingPreferredInterval"] = 258] = "StreamingPreferredInterval";
})(SensorReg || (SensorReg = {}));
var AccelerometerReg;
(function (AccelerometerReg) {
    /**
     * Indicates the current forces acting on accelerometer.
     *
     * ```
     * const [x, y, z] = jdunpack<[number, number, number]>(buf, "i12.20 i12.20 i12.20")
     * ```
     */
    AccelerometerReg[AccelerometerReg["Forces"] = 257] = "Forces";
    /**
     * Read-only g i12.20 (int32_t). Error on the reading value.
     *
     * ```
     * const [forcesError] = jdunpack<[number]>(buf, "i12.20")
     * ```
     */
    AccelerometerReg[AccelerometerReg["ForcesError"] = 262] = "ForcesError";
    /**
     * Read-write g i12.20 (int32_t). Configures the range forces detected.
     * Read-back after setting to get current value.
     *
     * ```
     * const [maxForce] = jdunpack<[number]>(buf, "i12.20")
     * ```
     */
    AccelerometerReg[AccelerometerReg["MaxForce"] = 128] = "MaxForce";
})(AccelerometerReg || (AccelerometerReg = {}));
var AccelerometerEvent;
(function (AccelerometerEvent) {
    /**
     * Emitted when accelerometer is tilted in the given direction.
     */
    AccelerometerEvent[AccelerometerEvent["TiltUp"] = 129] = "TiltUp";
    /**
     * Emitted when accelerometer is tilted in the given direction.
     */
    AccelerometerEvent[AccelerometerEvent["TiltDown"] = 130] = "TiltDown";
    /**
     * Emitted when accelerometer is tilted in the given direction.
     */
    AccelerometerEvent[AccelerometerEvent["TiltLeft"] = 131] = "TiltLeft";
    /**
     * Emitted when accelerometer is tilted in the given direction.
     */
    AccelerometerEvent[AccelerometerEvent["TiltRight"] = 132] = "TiltRight";
    /**
     * Emitted when accelerometer is laying flat in the given direction.
     */
    AccelerometerEvent[AccelerometerEvent["FaceUp"] = 133] = "FaceUp";
    /**
     * Emitted when accelerometer is laying flat in the given direction.
     */
    AccelerometerEvent[AccelerometerEvent["FaceDown"] = 134] = "FaceDown";
    /**
     * Emitted when total force acting on accelerometer is much less than 1g.
     */
    AccelerometerEvent[AccelerometerEvent["Freefall"] = 135] = "Freefall";
    /**
     * Emitted when forces change violently a few times.
     */
    AccelerometerEvent[AccelerometerEvent["Shake"] = 139] = "Shake";
    /**
     * Emitted when force in any direction exceeds given threshold.
     */
    AccelerometerEvent[AccelerometerEvent["Force2g"] = 140] = "Force2g";
    /**
     * Emitted when force in any direction exceeds given threshold.
     */
    AccelerometerEvent[AccelerometerEvent["Force3g"] = 136] = "Force3g";
    /**
     * Emitted when force in any direction exceeds given threshold.
     */
    AccelerometerEvent[AccelerometerEvent["Force6g"] = 137] = "Force6g";
    /**
     * Emitted when force in any direction exceeds given threshold.
     */
    AccelerometerEvent[AccelerometerEvent["Force8g"] = 138] = "Force8g";
})(AccelerometerEvent || (AccelerometerEvent = {}));
var ArcadeGamepadButton;
(function (ArcadeGamepadButton) {
    ArcadeGamepadButton[ArcadeGamepadButton["Left"] = 1] = "Left";
    ArcadeGamepadButton[ArcadeGamepadButton["Up"] = 2] = "Up";
    ArcadeGamepadButton[ArcadeGamepadButton["Right"] = 3] = "Right";
    ArcadeGamepadButton[ArcadeGamepadButton["Down"] = 4] = "Down";
    ArcadeGamepadButton[ArcadeGamepadButton["A"] = 5] = "A";
    ArcadeGamepadButton[ArcadeGamepadButton["B"] = 6] = "B";
    ArcadeGamepadButton[ArcadeGamepadButton["Menu"] = 7] = "Menu";
    ArcadeGamepadButton[ArcadeGamepadButton["Select"] = 8] = "Select";
    ArcadeGamepadButton[ArcadeGamepadButton["Reset"] = 9] = "Reset";
    ArcadeGamepadButton[ArcadeGamepadButton["Exit"] = 10] = "Exit";
})(ArcadeGamepadButton || (ArcadeGamepadButton = {}));
var ArcadeGamepadReg;
(function (ArcadeGamepadReg) {
    /**
     * Indicates which buttons are currently active (pressed).
     * `pressure` should be `0xff` for digital buttons, and proportional for analog ones.
     *
     * ```
     * const [rest] = jdunpack<[([ArcadeGamepadButton, number])[]]>(buf, "r: u8 u0.8")
     * const [button, pressure] = rest[0]
     * ```
     */
    ArcadeGamepadReg[ArcadeGamepadReg["Buttons"] = 257] = "Buttons";
    /**
     * Constant. Indicates number of players supported and which buttons are present on the controller.
     *
     * ```
     * const [button] = jdunpack<[ArcadeGamepadButton[]]>(buf, "u8[]")
     * ```
     */
    ArcadeGamepadReg[ArcadeGamepadReg["AvailableButtons"] = 384] = "AvailableButtons";
})(ArcadeGamepadReg || (ArcadeGamepadReg = {}));
var ArcadeGamepadEvent;
(function (ArcadeGamepadEvent) {
    /**
     * Argument: button Button (uint8_t). Emitted when button goes from inactive to active.
     *
     * ```
     * const [button] = jdunpack<[ArcadeGamepadButton]>(buf, "u8")
     * ```
     */
    ArcadeGamepadEvent[ArcadeGamepadEvent["Down"] = 1] = "Down";
    /**
     * Argument: button Button (uint8_t). Emitted when button goes from active to inactive.
     *
     * ```
     * const [button] = jdunpack<[ArcadeGamepadButton]>(buf, "u8")
     * ```
     */
    ArcadeGamepadEvent[ArcadeGamepadEvent["Up"] = 2] = "Up";
})(ArcadeGamepadEvent || (ArcadeGamepadEvent = {}));
var ArcadeSoundCmd;
(function (ArcadeSoundCmd) {
    /**
     * Argument: samples bytes. Play samples, which are single channel, signed 16-bit little endian values.
     *
     * ```
     * const [samples] = jdunpack<[Uint8Array]>(buf, "b")
     * ```
     */
    ArcadeSoundCmd[ArcadeSoundCmd["Play"] = 128] = "Play";
})(ArcadeSoundCmd || (ArcadeSoundCmd = {}));
var ArcadeSoundReg;
(function (ArcadeSoundReg) {
    /**
     * Read-write Hz u22.10 (uint32_t). Get or set playback sample rate (in samples per second).
     * If you set it, read it back, as the value may be rounded up or down.
     *
     * ```
     * const [sampleRate] = jdunpack<[number]>(buf, "u22.10")
     * ```
     */
    ArcadeSoundReg[ArcadeSoundReg["SampleRate"] = 128] = "SampleRate";
    /**
     * Constant B uint32_t. The size of the internal audio buffer.
     *
     * ```
     * const [bufferSize] = jdunpack<[number]>(buf, "u32")
     * ```
     */
    ArcadeSoundReg[ArcadeSoundReg["BufferSize"] = 384] = "BufferSize";
    /**
     * Read-only B uint32_t. How much data is still left in the buffer to play.
     * Clients should not send more data than `buffer_size - buffer_pending`,
     * but can keep the `buffer_pending` as low as they want to ensure low latency
     * of audio playback.
     *
     * ```
     * const [bufferPending] = jdunpack<[number]>(buf, "u32")
     * ```
     */
    ArcadeSoundReg[ArcadeSoundReg["BufferPending"] = 385] = "BufferPending";
})(ArcadeSoundReg || (ArcadeSoundReg = {}));
var AzureIotHubHealthConnectionStatus;
(function (AzureIotHubHealthConnectionStatus) {
    AzureIotHubHealthConnectionStatus[AzureIotHubHealthConnectionStatus["Connected"] = 0] = "Connected";
    AzureIotHubHealthConnectionStatus[AzureIotHubHealthConnectionStatus["Disconnected"] = 1] = "Disconnected";
    AzureIotHubHealthConnectionStatus[AzureIotHubHealthConnectionStatus["Connecting"] = 2] = "Connecting";
    AzureIotHubHealthConnectionStatus[AzureIotHubHealthConnectionStatus["Disconnecting"] = 3] = "Disconnecting";
})(AzureIotHubHealthConnectionStatus || (AzureIotHubHealthConnectionStatus = {}));
var AzureIotHubHealthReg;
(function (AzureIotHubHealthReg) {
    /**
     * Read-only string (bytes). Something like `my-iot-hub.azure-devices.net`; empty string when not properly configured
     *
     * ```
     * const [hubName] = jdunpack<[string]>(buf, "s")
     * ```
     */
    AzureIotHubHealthReg[AzureIotHubHealthReg["HubName"] = 384] = "HubName";
    /**
     * Read-only string (bytes). Device identifier in Azure Iot Hub
     *
     * ```
     * const [hubDeviceId] = jdunpack<[string]>(buf, "s")
     * ```
     */
    AzureIotHubHealthReg[AzureIotHubHealthReg["HubDeviceId"] = 385] = "HubDeviceId";
    /**
     * Read-only ConnectionStatus (uint16_t). Indicates the status of connection. A message beyond the [0..3] range represents an HTTP error code.
     *
     * ```
     * const [connectionStatus] = jdunpack<[AzureIotHubHealthConnectionStatus]>(buf, "u16")
     * ```
     */
    AzureIotHubHealthReg[AzureIotHubHealthReg["ConnectionStatus"] = 386] = "ConnectionStatus";
    /**
     * Reads internal statistics about messages sent to the hub.
     *
     * ```
     * const [reading, event, twinReported, twinDesired] = jdunpack<[number, number, number, number]>(buf, "u32 u32 u32 u32")
     * ```
     */
    AzureIotHubHealthReg[AzureIotHubHealthReg["Statistics"] = 387] = "Statistics";
})(AzureIotHubHealthReg || (AzureIotHubHealthReg = {}));
var AzureIotHubHealthCmd;
(function (AzureIotHubHealthCmd) {
    /**
     * No args. Starts a connection to the IoT hub service
     */
    AzureIotHubHealthCmd[AzureIotHubHealthCmd["Connect"] = 129] = "Connect";
    /**
     * No args. Starts disconnecting from the IoT hub service
     */
    AzureIotHubHealthCmd[AzureIotHubHealthCmd["Disconnect"] = 130] = "Disconnect";
    /**
     * Argument: connection_string string (bytes). Restricted command to override the existing connection string to the Azure IoT Hub.
     *
     * ```
     * const [connectionString] = jdunpack<[string]>(buf, "s")
     * ```
     */
    AzureIotHubHealthCmd[AzureIotHubHealthCmd["SetConnectionString"] = 134] = "SetConnectionString";
})(AzureIotHubHealthCmd || (AzureIotHubHealthCmd = {}));
var AzureIotHubHealthEvent;
(function (AzureIotHubHealthEvent) {
    /**
     * Argument: connection_status ConnectionStatus (uint16_t). Raised when the connection status changes
     *
     * ```
     * const [connectionStatus] = jdunpack<[AzureIotHubHealthConnectionStatus]>(buf, "u16")
     * ```
     */
    AzureIotHubHealthEvent[AzureIotHubHealthEvent["ConnectionStatusChange"] = 3] = "ConnectionStatusChange";
})(AzureIotHubHealthEvent || (AzureIotHubHealthEvent = {}));
var BarcodeReaderFormat;
(function (BarcodeReaderFormat) {
    BarcodeReaderFormat[BarcodeReaderFormat["Aztec"] = 1] = "Aztec";
    BarcodeReaderFormat[BarcodeReaderFormat["Code128"] = 2] = "Code128";
    BarcodeReaderFormat[BarcodeReaderFormat["Code39"] = 3] = "Code39";
    BarcodeReaderFormat[BarcodeReaderFormat["Code93"] = 4] = "Code93";
    BarcodeReaderFormat[BarcodeReaderFormat["Codabar"] = 5] = "Codabar";
    BarcodeReaderFormat[BarcodeReaderFormat["DataMatrix"] = 6] = "DataMatrix";
    BarcodeReaderFormat[BarcodeReaderFormat["Ean13"] = 8] = "Ean13";
    BarcodeReaderFormat[BarcodeReaderFormat["Ean8"] = 9] = "Ean8";
    BarcodeReaderFormat[BarcodeReaderFormat["ITF"] = 10] = "ITF";
    BarcodeReaderFormat[BarcodeReaderFormat["Pdf417"] = 11] = "Pdf417";
    BarcodeReaderFormat[BarcodeReaderFormat["QrCode"] = 12] = "QrCode";
    BarcodeReaderFormat[BarcodeReaderFormat["UpcA"] = 13] = "UpcA";
    BarcodeReaderFormat[BarcodeReaderFormat["UpcE"] = 14] = "UpcE";
})(BarcodeReaderFormat || (BarcodeReaderFormat = {}));
var BarcodeReaderReg;
(function (BarcodeReaderReg) {
    /**
     * Read-write bool (uint8_t). Turns on or off the detection of barcodes.
     *
     * ```
     * const [enabled] = jdunpack<[number]>(buf, "u8")
     * ```
     */
    BarcodeReaderReg[BarcodeReaderReg["Enabled"] = 1] = "Enabled";
    /**
     * Constant. Reports the list of supported barcode formats, as documented in https://developer.mozilla.org/en-US/docs/Web/API/Barcode_Detection_API.
     *
     * ```
     * const [format] = jdunpack<[BarcodeReaderFormat[]]>(buf, "u8[]")
     * ```
     */
    BarcodeReaderReg[BarcodeReaderReg["Formats"] = 384] = "Formats";
})(BarcodeReaderReg || (BarcodeReaderReg = {}));
var BarcodeReaderEvent;
(function (BarcodeReaderEvent) {
    /**
     * Raised when a bar code is detected and decoded. If the reader detects multiple codes, it will issue multiple events.
     * In case of numeric barcodes, the `data` field should contain the ASCII (which is the same as UTF8 in that case) representation of the number.
     *
     * ```
     * const [format, data] = jdunpack<[BarcodeReaderFormat, string]>(buf, "u8 s")
     * ```
     */
    BarcodeReaderEvent[BarcodeReaderEvent["Detect"] = 1] = "Detect";
})(BarcodeReaderEvent || (BarcodeReaderEvent = {}));
var BarometerReg;
(function (BarometerReg) {
    /**
     * Read-only hPa u22.10 (uint32_t). The air pressure.
     *
     * ```
     * const [pressure] = jdunpack<[number]>(buf, "u22.10")
     * ```
     */
    BarometerReg[BarometerReg["Pressure"] = 257] = "Pressure";
    /**
     * Read-only hPa u22.10 (uint32_t). The real pressure is between `pressure - pressure_error` and `pressure + pressure_error`.
     *
     * ```
     * const [pressureError] = jdunpack<[number]>(buf, "u22.10")
     * ```
     */
    BarometerReg[BarometerReg["PressureError"] = 262] = "PressureError";
})(BarometerReg || (BarometerReg = {}));
var BitRadioReg;
(function (BitRadioReg) {
    /**
     * Read-write bool (uint8_t). Turns on/off the radio antenna.
     *
     * ```
     * const [enabled] = jdunpack<[number]>(buf, "u8")
     * ```
     */
    BitRadioReg[BitRadioReg["Enabled"] = 1] = "Enabled";
    /**
     * Read-write uint8_t. Group used to filter packets
     *
     * ```
     * const [group] = jdunpack<[number]>(buf, "u8")
     * ```
     */
    BitRadioReg[BitRadioReg["Group"] = 128] = "Group";
    /**
     * Read-write uint8_t. Antenna power to increase or decrease range.
     *
     * ```
     * const [transmissionPower] = jdunpack<[number]>(buf, "u8")
     * ```
     */
    BitRadioReg[BitRadioReg["TransmissionPower"] = 129] = "TransmissionPower";
    /**
     * Read-write uint8_t. Change the transmission and reception band of the radio to the given channel.
     *
     * ```
     * const [frequencyBand] = jdunpack<[number]>(buf, "u8")
     * ```
     */
    BitRadioReg[BitRadioReg["FrequencyBand"] = 130] = "FrequencyBand";
})(BitRadioReg || (BitRadioReg = {}));
var BitRadioCmd;
(function (BitRadioCmd) {
    /**
     * Argument: message string (bytes). Sends a string payload as a radio message, maximum 18 characters.
     *
     * ```
     * const [message] = jdunpack<[string]>(buf, "s")
     * ```
     */
    BitRadioCmd[BitRadioCmd["SendString"] = 128] = "SendString";
    /**
     * Argument: value f64 (uint64_t). Sends a double precision number payload as a radio message
     *
     * ```
     * const [value] = jdunpack<[number]>(buf, "f64")
     * ```
     */
    BitRadioCmd[BitRadioCmd["SendNumber"] = 129] = "SendNumber";
    /**
     * Sends a double precision number and a name payload as a radio message
     *
     * ```
     * const [value, name] = jdunpack<[number, string]>(buf, "f64 s")
     * ```
     */
    BitRadioCmd[BitRadioCmd["SendValue"] = 130] = "SendValue";
    /**
     * Argument: data bytes. Sends a payload of bytes as a radio message
     *
     * ```
     * const [data] = jdunpack<[Uint8Array]>(buf, "b")
     * ```
     */
    BitRadioCmd[BitRadioCmd["SendBuffer"] = 131] = "SendBuffer";
    /**
     * Raised when a string packet is received
     *
     * ```
     * const [time, deviceSerialNumber, rssi, message] = jdunpack<[number, number, number, string]>(buf, "u32 u32 i8 x[1] s")
     * ```
     */
    BitRadioCmd[BitRadioCmd["StringReceived"] = 144] = "StringReceived";
    /**
     * Raised when a number packet is received
     *
     * ```
     * const [time, deviceSerialNumber, rssi, value, name] = jdunpack<[number, number, number, number, string]>(buf, "u32 u32 i8 x[3] f64 s")
     * ```
     */
    BitRadioCmd[BitRadioCmd["NumberReceived"] = 145] = "NumberReceived";
    /**
     * Raised when a buffer packet is received
     *
     * ```
     * const [time, deviceSerialNumber, rssi, data] = jdunpack<[number, number, number, Uint8Array]>(buf, "u32 u32 i8 x[1] b")
     * ```
     */
    BitRadioCmd[BitRadioCmd["BufferReceived"] = 146] = "BufferReceived";
})(BitRadioCmd || (BitRadioCmd = {}));
var BootloaderError;
(function (BootloaderError) {
    BootloaderError[BootloaderError["NoError"] = 0] = "NoError";
    BootloaderError[BootloaderError["PacketTooSmall"] = 1] = "PacketTooSmall";
    BootloaderError[BootloaderError["OutOfFlashableRange"] = 2] = "OutOfFlashableRange";
    BootloaderError[BootloaderError["InvalidPageOffset"] = 3] = "InvalidPageOffset";
    BootloaderError[BootloaderError["NotPageAligned"] = 4] = "NotPageAligned";
})(BootloaderError || (BootloaderError = {}));
var BootloaderCmd;
(function (BootloaderCmd) {
    /**
     * No args. The `service_class` is always `0x1ffa9948`. The `product_identifer` identifies the kind of firmware
     * that "fits" this device.
     */
    BootloaderCmd[BootloaderCmd["Info"] = 0] = "Info";
    /**
     * report Info
     * ```
     * const [serviceClass, pageSize, flashableSize, productIdentifer] = jdunpack<[number, number, number, number]>(buf, "u32 u32 u32 u32")
     * ```
     */
    /**
     * Argument: session_id uint32_t. The flashing server should generate a random id, and use this command to set it.
     *
     * ```
     * const [sessionId] = jdunpack<[number]>(buf, "u32")
     * ```
     */
    BootloaderCmd[BootloaderCmd["SetSession"] = 129] = "SetSession";
    /**
     * report SetSession
     * ```
     * const [sessionId] = jdunpack<[number]>(buf, "u32")
     * ```
     */
    /**
     * Use to send flashing data. A physical page is split into `chunk_max + 1` chunks, where `chunk_no = 0 ... chunk_max`.
     * Each chunk is stored at `page_address + page_offset`. `page_address` has to be equal in all chunks,
     * and is included in response.
     * Only the last chunk causes writing to flash and elicits response.
     *
     * ```
     * const [pageAddress, pageOffset, chunkNo, chunkMax, sessionId, pageData] = jdunpack<[number, number, number, number, number, Uint8Array]>(buf, "u32 u16 u8 u8 u32 x[4] x[4] x[4] x[4] b[208]")
     * ```
     */
    BootloaderCmd[BootloaderCmd["PageData"] = 128] = "PageData";
    /**
     * report PageData
     * ```
     * const [sessionId, pageError, pageAddress] = jdunpack<[number, BootloaderError, number]>(buf, "u32 u32 u32")
     * ```
     */
})(BootloaderCmd || (BootloaderCmd = {}));
var ButtonReg;
(function (ButtonReg) {
    /**
     * Read-only ratio u0.16 (uint16_t). Indicates the pressure state of the button, where ``0`` is open and ``0xffff`` is fully pressed.
     *
     * ```
     * const [pressure] = jdunpack<[number]>(buf, "u0.16")
     * ```
     */
    ButtonReg[ButtonReg["Pressure"] = 257] = "Pressure";
    /**
     * Constant bool (uint8_t). Indicates if the button provides analog ``pressure`` readings.
     *
     * ```
     * const [analog] = jdunpack<[number]>(buf, "u8")
     * ```
     */
    ButtonReg[ButtonReg["Analog"] = 384] = "Analog";
    /**
     * Read-only bool (uint8_t). Determines if the button is pressed currently.
     */
    ButtonReg[ButtonReg["Pressed"] = 385] = "Pressed";
})(ButtonReg || (ButtonReg = {}));
var ButtonEvent;
(function (ButtonEvent) {
    /**
     * Emitted when button goes from inactive to active.
     */
    ButtonEvent[ButtonEvent["Down"] = 1] = "Down";
    /**
     * Argument: time ms uint32_t. Emitted when button goes from active to inactive. The 'time' parameter
     * records the amount of time between the down and up events.
     *
     * ```
     * const [time] = jdunpack<[number]>(buf, "u32")
     * ```
     */
    ButtonEvent[ButtonEvent["Up"] = 2] = "Up";
    /**
     * Argument: time ms uint32_t. Emitted when the press time is greater than 500ms, and then at least every 500ms
     * as long as the button remains pressed. The 'time' parameter records the the amount of time
     * that the button has been held (since the down event).
     *
     * ```
     * const [time] = jdunpack<[number]>(buf, "u32")
     * ```
     */
    ButtonEvent[ButtonEvent["Hold"] = 129] = "Hold";
})(ButtonEvent || (ButtonEvent = {}));
var BuzzerReg;
(function (BuzzerReg) {
    /**
     * Read-write ratio u0.8 (uint8_t). The volume (duty cycle) of the buzzer.
     *
     * ```
     * const [volume] = jdunpack<[number]>(buf, "u0.8")
     * ```
     */
    BuzzerReg[BuzzerReg["Volume"] = 1] = "Volume";
})(BuzzerReg || (BuzzerReg = {}));
var BuzzerCmd;
(function (BuzzerCmd) {
    /**
     * Play a PWM tone with given period and duty for given duration.
     * The duty is scaled down with `volume` register.
     * To play tone at frequency `F` Hz and volume `V` (in `0..1`) you will want
     * to send `P = 1000000 / F` and `D = P * V / 2`.
     *
     * ```
     * const [period, duty, duration] = jdunpack<[number, number, number]>(buf, "u16 u16 u16")
     * ```
     */
    BuzzerCmd[BuzzerCmd["PlayTone"] = 128] = "PlayTone";
    /**
     * Play a note at the given frequency and volume.
     */
    BuzzerCmd[BuzzerCmd["PlayNote"] = 129] = "PlayNote";
})(BuzzerCmd || (BuzzerCmd = {}));
var CapacitiveButtonReg;
(function (CapacitiveButtonReg) {
    /**
     * Read-write ratio u0.16 (uint16_t). Indicates the threshold for ``up`` events.
     *
     * ```
     * const [threshold] = jdunpack<[number]>(buf, "u0.16")
     * ```
     */
    CapacitiveButtonReg[CapacitiveButtonReg["Threshold"] = 6] = "Threshold";
})(CapacitiveButtonReg || (CapacitiveButtonReg = {}));
var CapacitiveButtonCmd;
(function (CapacitiveButtonCmd) {
    /**
     * No args. Request to calibrate the capactive. When calibration is requested, the device expects that no object is touching the button.
     * The report indicates the calibration is done.
     */
    CapacitiveButtonCmd[CapacitiveButtonCmd["Calibrate"] = 2] = "Calibrate";
})(CapacitiveButtonCmd || (CapacitiveButtonCmd = {}));
var CharacterScreenVariant;
(function (CharacterScreenVariant) {
    CharacterScreenVariant[CharacterScreenVariant["LCD"] = 1] = "LCD";
    CharacterScreenVariant[CharacterScreenVariant["OLED"] = 2] = "OLED";
})(CharacterScreenVariant || (CharacterScreenVariant = {}));
var CharacterScreenTextDirection;
(function (CharacterScreenTextDirection) {
    CharacterScreenTextDirection[CharacterScreenTextDirection["LeftToRight"] = 1] = "LeftToRight";
    CharacterScreenTextDirection[CharacterScreenTextDirection["RightToLeft"] = 2] = "RightToLeft";
})(CharacterScreenTextDirection || (CharacterScreenTextDirection = {}));
var CharacterScreenReg;
(function (CharacterScreenReg) {
    /**
     * Read-write string (bytes). Text to show. Use `\n` to break lines.
     *
     * ```
     * const [message] = jdunpack<[string]>(buf, "s")
     * ```
     */
    CharacterScreenReg[CharacterScreenReg["Message"] = 2] = "Message";
    /**
     * Read-write ratio u0.8 (uint8_t). Brightness of the screen. `0` means off.
     *
     * ```
     * const [brightness] = jdunpack<[number]>(buf, "u0.8")
     * ```
     */
    CharacterScreenReg[CharacterScreenReg["Brightness"] = 1] = "Brightness";
    /**
     * Constant Variant (uint8_t). Describes the type of character LED screen.
     *
     * ```
     * const [variant] = jdunpack<[CharacterScreenVariant]>(buf, "u8")
     * ```
     */
    CharacterScreenReg[CharacterScreenReg["Variant"] = 263] = "Variant";
    /**
     * Read-write TextDirection (uint8_t). Specifies the RTL or LTR direction of the text.
     *
     * ```
     * const [textDirection] = jdunpack<[CharacterScreenTextDirection]>(buf, "u8")
     * ```
     */
    CharacterScreenReg[CharacterScreenReg["TextDirection"] = 130] = "TextDirection";
    /**
     * Constant uint8_t. Gets the number of rows.
     *
     * ```
     * const [rows] = jdunpack<[number]>(buf, "u8")
     * ```
     */
    CharacterScreenReg[CharacterScreenReg["Rows"] = 384] = "Rows";
    /**
     * Constant uint8_t. Gets the number of columns.
     *
     * ```
     * const [columns] = jdunpack<[number]>(buf, "u8")
     * ```
     */
    CharacterScreenReg[CharacterScreenReg["Columns"] = 385] = "Columns";
})(CharacterScreenReg || (CharacterScreenReg = {}));
var CharacterScreenCmd;
(function (CharacterScreenCmd) {
    /**
     * Overrides the content of a single line at a 0-based index.
     *
     * ```
     * const [index, message] = jdunpack<[number, string]>(buf, "u16 s")
     * ```
     */
    CharacterScreenCmd[CharacterScreenCmd["SetLine"] = 128] = "SetLine";
    /**
     * No args. Clears all text from the display.
     */
    CharacterScreenCmd[CharacterScreenCmd["Clear"] = 129] = "Clear";
})(CharacterScreenCmd || (CharacterScreenCmd = {}));
var ColorReg;
(function (ColorReg) {
    /**
     * Detected color in the RGB color space.
     *
     * ```
     * const [red, green, blue] = jdunpack<[number, number, number]>(buf, "u0.16 u0.16 u0.16")
     * ```
     */
    ColorReg[ColorReg["Color"] = 257] = "Color";
})(ColorReg || (ColorReg = {}));
var CompassReg;
(function (CompassReg) {
    /**
     * Read-only ° u16.16 (uint32_t). The heading with respect to the magnetic north.
     *
     * ```
     * const [heading] = jdunpack<[number]>(buf, "u16.16")
     * ```
     */
    CompassReg[CompassReg["Heading"] = 257] = "Heading";
    /**
     * Read-write bool (uint8_t). Turn on or off the sensor. Turning on the sensor may start a calibration sequence.
     *
     * ```
     * const [enabled] = jdunpack<[number]>(buf, "u8")
     * ```
     */
    CompassReg[CompassReg["Enabled"] = 1] = "Enabled";
    /**
     * Read-only ° u16.16 (uint32_t). Error on the heading reading
     *
     * ```
     * const [headingError] = jdunpack<[number]>(buf, "u16.16")
     * ```
     */
    CompassReg[CompassReg["HeadingError"] = 262] = "HeadingError";
})(CompassReg || (CompassReg = {}));
var CompassCmd;
(function (CompassCmd) {
    /**
     * No args. Starts a calibration sequence for the compass.
     */
    CompassCmd[CompassCmd["Calibrate"] = 2] = "Calibrate";
})(CompassCmd || (CompassCmd = {}));
var ControlAnnounceFlags;
(function (ControlAnnounceFlags) {
    ControlAnnounceFlags[ControlAnnounceFlags["RestartCounterSteady"] = 15] = "RestartCounterSteady";
    ControlAnnounceFlags[ControlAnnounceFlags["RestartCounter1"] = 1] = "RestartCounter1";
    ControlAnnounceFlags[ControlAnnounceFlags["RestartCounter2"] = 2] = "RestartCounter2";
    ControlAnnounceFlags[ControlAnnounceFlags["RestartCounter4"] = 4] = "RestartCounter4";
    ControlAnnounceFlags[ControlAnnounceFlags["RestartCounter8"] = 8] = "RestartCounter8";
    ControlAnnounceFlags[ControlAnnounceFlags["StatusLightNone"] = 0] = "StatusLightNone";
    ControlAnnounceFlags[ControlAnnounceFlags["StatusLightMono"] = 16] = "StatusLightMono";
    ControlAnnounceFlags[ControlAnnounceFlags["StatusLightRgbNoFade"] = 32] = "StatusLightRgbNoFade";
    ControlAnnounceFlags[ControlAnnounceFlags["StatusLightRgbFade"] = 48] = "StatusLightRgbFade";
    ControlAnnounceFlags[ControlAnnounceFlags["SupportsACK"] = 256] = "SupportsACK";
    ControlAnnounceFlags[ControlAnnounceFlags["SupportsBroadcast"] = 512] = "SupportsBroadcast";
    ControlAnnounceFlags[ControlAnnounceFlags["SupportsFrames"] = 1024] = "SupportsFrames";
    ControlAnnounceFlags[ControlAnnounceFlags["IsClient"] = 2048] = "IsClient";
})(ControlAnnounceFlags || (ControlAnnounceFlags = {}));
var ControlCmd;
(function (ControlCmd) {
    /**
     * No args. The `restart_counter` is computed from the `flags & RestartCounterSteady`, starts at `0x1` and increments by one until it reaches `0xf`, then it stays at `0xf`.
     * If this number ever goes down, it indicates that the device restarted.
     * `service_class` indicates class identifier for each service index (service index `0` is always control, so it's
     * skipped in this enumeration).
     * `packet_count` indicates the number of packets sent by the current device since last announce,
     * including the current announce packet (it is always 0 if this feature is not supported).
     * The command form can be used to induce report, which is otherwise broadcast every 500ms.
     */
    ControlCmd[ControlCmd["Services"] = 0] = "Services";
    /**
     * report Services
     * ```
     * const [flags, packetCount, serviceClass] = jdunpack<[ControlAnnounceFlags, number, number[]]>(buf, "u16 u8 x[1] u32[]")
     * ```
     */
    /**
     * No args. Do nothing. Always ignored. Can be used to test ACKs.
     */
    ControlCmd[ControlCmd["Noop"] = 128] = "Noop";
    /**
     * No args. Blink the status LED (262ms on, 262ms off, four times, with the blue LED) or otherwise draw user's attention to device with no status light.
     * For devices with status light (this can be discovered in the announce flags), the client should
     * send the sequence of status light command to generate the identify animation.
     */
    ControlCmd[ControlCmd["Identify"] = 129] = "Identify";
    /**
     * No args. Reset device. ACK may or may not be sent.
     */
    ControlCmd[ControlCmd["Reset"] = 130] = "Reset";
    /**
     * The device will respond `num_responses` times, as fast as it can, setting the `counter` field in the report
     * to `start_counter`, then `start_counter + 1`, ..., and finally `start_counter + num_responses - 1`.
     * The `dummy_payload` is `size` bytes long and contains bytes `0, 1, 2, ...`.
     *
     * ```
     * const [numResponses, startCounter, size] = jdunpack<[number, number, number]>(buf, "u32 u32 u8")
     * ```
     */
    ControlCmd[ControlCmd["FloodPing"] = 131] = "FloodPing";
    /**
     * report FloodPing
     * ```
     * const [counter, dummyPayload] = jdunpack<[number, Uint8Array]>(buf, "u32 b")
     * ```
     */
    /**
     * Initiates a color transition of the status light from its current color to the one specified.
     * The transition will complete in about `512 / speed` frames
     * (each frame is currently 100ms, so speed of `51` is about 1 second and `26` 0.5 second).
     * As a special case, if speed is `0` the transition is immediate.
     * If MCU is not capable of executing transitions, it can consider `speed` to be always `0`.
     * If a monochrome LEDs is fitted, the average value of ``red``, ``green``, ``blue`` is used.
     * If intensity of a monochrome LED cannot be controlled, any value larger than `0` should be considered
     * on, and `0` (for all three channels) should be considered off.
     *
     * ```
     * const [toRed, toGreen, toBlue, speed] = jdunpack<[number, number, number, number]>(buf, "u8 u8 u8 u8")
     * ```
     */
    ControlCmd[ControlCmd["SetStatusLight"] = 132] = "SetStatusLight";
})(ControlCmd || (ControlCmd = {}));
var ControlReg;
(function (ControlReg) {
    /**
     * Read-write μs uint32_t. When set to value other than `0`, it asks the device to reset after specified number of microseconds.
     * This is typically used to implement watchdog functionality, where a brain device sets `reset_in` to
     * say 1.6s every 0.5s.
     *
     * ```
     * const [resetIn] = jdunpack<[number]>(buf, "u32")
     * ```
     */
    ControlReg[ControlReg["ResetIn"] = 128] = "ResetIn";
    /**
     * Constant string (bytes). Identifies the type of hardware (eg., ACME Corp. Servo X-42 Rev C)
     *
     * ```
     * const [deviceDescription] = jdunpack<[string]>(buf, "s")
     * ```
     */
    ControlReg[ControlReg["DeviceDescription"] = 384] = "DeviceDescription";
    /**
     * Constant uint32_t. A numeric code for the string above; used to identify firmware images and devices.
     *
     * ```
     * const [productIdentifier] = jdunpack<[number]>(buf, "u32")
     * ```
     */
    ControlReg[ControlReg["ProductIdentifier"] = 385] = "ProductIdentifier";
    /**
     * Constant uint32_t. Typically the same as `product_identifier` unless device was flashed by hand; the bootloader will respond to that code.
     *
     * ```
     * const [bootloaderProductIdentifier] = jdunpack<[number]>(buf, "u32")
     * ```
     */
    ControlReg[ControlReg["BootloaderProductIdentifier"] = 388] = "BootloaderProductIdentifier";
    /**
     * Constant string (bytes). A string describing firmware version; typically semver.
     *
     * ```
     * const [firmwareVersion] = jdunpack<[string]>(buf, "s")
     * ```
     */
    ControlReg[ControlReg["FirmwareVersion"] = 389] = "FirmwareVersion";
    /**
     * Read-only °C int16_t. MCU temperature in degrees Celsius (approximate).
     *
     * ```
     * const [mcuTemperature] = jdunpack<[number]>(buf, "i16")
     * ```
     */
    ControlReg[ControlReg["McuTemperature"] = 386] = "McuTemperature";
    /**
     * Read-only μs uint64_t. Number of microseconds since boot.
     *
     * ```
     * const [uptime] = jdunpack<[number]>(buf, "u64")
     * ```
     */
    ControlReg[ControlReg["Uptime"] = 390] = "Uptime";
})(ControlReg || (ControlReg = {}));
var DimmerVariant;
(function (DimmerVariant) {
    DimmerVariant[DimmerVariant["Light"] = 1] = "Light";
    DimmerVariant[DimmerVariant["Fan"] = 2] = "Fan";
    DimmerVariant[DimmerVariant["Pump"] = 3] = "Pump";
})(DimmerVariant || (DimmerVariant = {}));
var DimmerReg;
(function (DimmerReg) {
    /**
     * Read-write ratio u0.16 (uint16_t). The intensity of the current. Set to ``0`` to turn off completely the current.
     *
     * ```
     * const [intensity] = jdunpack<[number]>(buf, "u0.16")
     * ```
     */
    DimmerReg[DimmerReg["Intensity"] = 1] = "Intensity";
    /**
     * Constant Variant (uint8_t). The type of physical device
     *
     * ```
     * const [variant] = jdunpack<[DimmerVariant]>(buf, "u8")
     * ```
     */
    DimmerReg[DimmerReg["Variant"] = 263] = "Variant";
})(DimmerReg || (DimmerReg = {}));
var DistanceVariant;
(function (DistanceVariant) {
    DistanceVariant[DistanceVariant["Ultrasonic"] = 1] = "Ultrasonic";
    DistanceVariant[DistanceVariant["Infrared"] = 2] = "Infrared";
    DistanceVariant[DistanceVariant["LiDAR"] = 3] = "LiDAR";
    DistanceVariant[DistanceVariant["Laser"] = 4] = "Laser";
})(DistanceVariant || (DistanceVariant = {}));
var DistanceReg;
(function (DistanceReg) {
    /**
     * Read-only m u16.16 (uint32_t). Current distance from the object
     *
     * ```
     * const [distance] = jdunpack<[number]>(buf, "u16.16")
     * ```
     */
    DistanceReg[DistanceReg["Distance"] = 257] = "Distance";
    /**
     * Constant m u16.16 (uint32_t). Minimum measurable distance
     *
     * ```
     * const [minRange] = jdunpack<[number]>(buf, "u16.16")
     * ```
     */
    DistanceReg[DistanceReg["MinRange"] = 260] = "MinRange";
    /**
     * Constant m u16.16 (uint32_t). Maximum measurable distance
     *
     * ```
     * const [maxRange] = jdunpack<[number]>(buf, "u16.16")
     * ```
     */
    DistanceReg[DistanceReg["MaxRange"] = 261] = "MaxRange";
    /**
     * Constant Variant (uint8_t). Determines the type of sensor used.
     *
     * ```
     * const [variant] = jdunpack<[DistanceVariant]>(buf, "u8")
     * ```
     */
    DistanceReg[DistanceReg["Variant"] = 263] = "Variant";
})(DistanceReg || (DistanceReg = {}));
var DmxReg;
(function (DmxReg) {
    /**
     * Read-write bool (uint8_t). Determines if the DMX bridge is active
     *
     * ```
     * const [enabled] = jdunpack<[number]>(buf, "u8")
     * ```
     */
    DmxReg[DmxReg["Enabled"] = 1] = "Enabled";
})(DmxReg || (DmxReg = {}));
var DmxCmd;
(function (DmxCmd) {
    /**
     * Argument: channels bytes. Send a DMX packet, up to 236bytes long, including the start code.
     *
     * ```
     * const [channels] = jdunpack<[Uint8Array]>(buf, "b")
     * ```
     */
    DmxCmd[DmxCmd["Send"] = 128] = "Send";
})(DmxCmd || (DmxCmd = {}));
var ECO2Variant;
(function (ECO2Variant) {
    ECO2Variant[ECO2Variant["VOC"] = 1] = "VOC";
    ECO2Variant[ECO2Variant["NDIR"] = 2] = "NDIR";
})(ECO2Variant || (ECO2Variant = {}));
var ECO2Reg;
(function (ECO2Reg) {
    /**
     * Read-only ppm u22.10 (uint32_t). Equivalent CO₂ (eCO₂) readings.
     *
     * ```
     * const [eCO2] = jdunpack<[number]>(buf, "u22.10")
     * ```
     */
    ECO2Reg[ECO2Reg["ECO2"] = 257] = "ECO2";
    /**
     * Read-only ppm u22.10 (uint32_t). Error on the reading value.
     *
     * ```
     * const [eCO2Error] = jdunpack<[number]>(buf, "u22.10")
     * ```
     */
    ECO2Reg[ECO2Reg["ECO2Error"] = 262] = "ECO2Error";
    /**
     * Constant ppm u22.10 (uint32_t). Minimum measurable value
     *
     * ```
     * const [minECO2] = jdunpack<[number]>(buf, "u22.10")
     * ```
     */
    ECO2Reg[ECO2Reg["MinECO2"] = 260] = "MinECO2";
    /**
     * Constant ppm u22.10 (uint32_t). Minimum measurable value
     *
     * ```
     * const [maxECO2] = jdunpack<[number]>(buf, "u22.10")
     * ```
     */
    ECO2Reg[ECO2Reg["MaxECO2"] = 261] = "MaxECO2";
    /**
     * Constant s uint32_t. Time required to achieve good sensor stability before measuring after long idle period.
     *
     * ```
     * const [conditioningPeriod] = jdunpack<[number]>(buf, "u32")
     * ```
     */
    ECO2Reg[ECO2Reg["ConditioningPeriod"] = 384] = "ConditioningPeriod";
    /**
     * Constant Variant (uint8_t). Type of physical sensor and capabilities.
     *
     * ```
     * const [variant] = jdunpack<[ECO2Variant]>(buf, "u8")
     * ```
     */
    ECO2Reg[ECO2Reg["Variant"] = 263] = "Variant";
})(ECO2Reg || (ECO2Reg = {}));
var GyroscopeReg;
(function (GyroscopeReg) {
    /**
     * Indicates the current forces acting on accelerometer.
     *
     * ```
     * const [x, y, z] = jdunpack<[number, number, number]>(buf, "i12.20 i12.20 i12.20")
     * ```
     */
    GyroscopeReg[GyroscopeReg["RotationRates"] = 257] = "RotationRates";
    /**
     * Read-only °/s i12.20 (int32_t). Error on the reading value.
     *
     * ```
     * const [rotationRatesError] = jdunpack<[number]>(buf, "i12.20")
     * ```
     */
    GyroscopeReg[GyroscopeReg["RotationRatesError"] = 262] = "RotationRatesError";
    /**
     * Read-write °/s i12.20 (int32_t). Configures the range of range of rotation rates.
     *
     * ```
     * const [maxRate] = jdunpack<[number]>(buf, "i12.20")
     * ```
     */
    GyroscopeReg[GyroscopeReg["MaxRate"] = 128] = "MaxRate";
})(GyroscopeReg || (GyroscopeReg = {}));
var HeartRateVariant;
(function (HeartRateVariant) {
    HeartRateVariant[HeartRateVariant["Finger"] = 1] = "Finger";
    HeartRateVariant[HeartRateVariant["Chest"] = 2] = "Chest";
    HeartRateVariant[HeartRateVariant["Wrist"] = 3] = "Wrist";
    HeartRateVariant[HeartRateVariant["Pump"] = 4] = "Pump";
    HeartRateVariant[HeartRateVariant["WebCam"] = 5] = "WebCam";
})(HeartRateVariant || (HeartRateVariant = {}));
var HeartRateReg;
(function (HeartRateReg) {
    /**
     * Read-only bpm u16.16 (uint32_t). The estimated heart rate.
     *
     * ```
     * const [heartRate] = jdunpack<[number]>(buf, "u16.16")
     * ```
     */
    HeartRateReg[HeartRateReg["HeartRate"] = 257] = "HeartRate";
    /**
     * Read-only bpm u16.16 (uint32_t). The estimated error on the reported sensor data.
     *
     * ```
     * const [heartRateError] = jdunpack<[number]>(buf, "u16.16")
     * ```
     */
    HeartRateReg[HeartRateReg["HeartRateError"] = 262] = "HeartRateError";
    /**
     * Constant Variant (uint8_t). The type of physical sensor
     *
     * ```
     * const [variant] = jdunpack<[HeartRateVariant]>(buf, "u8")
     * ```
     */
    HeartRateReg[HeartRateReg["Variant"] = 263] = "Variant";
})(HeartRateReg || (HeartRateReg = {}));
var HIDAdapterReg;
(function (HIDAdapterReg) {
    /**
     * Read-write uint8_t. The number of configurations stored on the server.
     *
     * ```
     * const [numConfigurations] = jdunpack<[number]>(buf, "u8")
     * ```
     */
    HIDAdapterReg[HIDAdapterReg["NumConfigurations"] = 128] = "NumConfigurations";
    /**
     * Read-write uint8_t. The current configuration the server is using.
     *
     * ```
     * const [currentConfiguration] = jdunpack<[number]>(buf, "u8")
     * ```
     */
    HIDAdapterReg[HIDAdapterReg["CurrentConfiguration"] = 129] = "CurrentConfiguration";
})(HIDAdapterReg || (HIDAdapterReg = {}));
var HIDAdapterCmd;
(function (HIDAdapterCmd) {
    /**
     * Retrieves a configuration stored on the server. If the configuration does not exist, an empty report will be returned
     *
     * ```
     * const [results, configurationNumber] = jdunpack<[Uint8Array, number]>(buf, "b[12] u8")
     * ```
     */
    HIDAdapterCmd[HIDAdapterCmd["GetConfiguration"] = 128] = "GetConfiguration";
    /**
     * Stores the given binding on the server. If a binding exists at this index, the new binding will replace it.
     *
     * ```
     * const [configurationNumber, bindingIndex, deviceId, serviceClass, triggerValue, triggerContext, serviceIndex, selector, modifiers] = jdunpack<[number, number, number, number, number, number, number, number, number]>(buf, "u8 u8 x[2] u64 u32 u32 u8 u8 u16 u16")
     * ```
     */
    HIDAdapterCmd[HIDAdapterCmd["SetBinding"] = 130] = "SetBinding";
    /**
     * Clears a specific binding stored on the device.
     *
     * ```
     * const [configurationNumber, bindingIndex] = jdunpack<[number, number]>(buf, "u8 u8")
     * ```
     */
    HIDAdapterCmd[HIDAdapterCmd["ClearBinding"] = 131] = "ClearBinding";
    /**
     * Argument: configuration_number uint8_t. Clears a specific configuration stored on the device.
     *
     * ```
     * const [configurationNumber] = jdunpack<[number]>(buf, "u8")
     * ```
     */
    HIDAdapterCmd[HIDAdapterCmd["ClearConfiguration"] = 132] = "ClearConfiguration";
    /**
     * No args. Clears all configurations and bindings stored on the device.
     */
    HIDAdapterCmd[HIDAdapterCmd["Clear"] = 133] = "Clear";
})(HIDAdapterCmd || (HIDAdapterCmd = {}));
/**
 * pipe_report Configuration
 * ```
 * const [configurationNumber, bindingIndex, deviceId, serviceClass, triggerValue, triggerContext, serviceIndex, selector, modifiers] = jdunpack<[number, number, number, number, number, number, number, number, number]>(buf, "u8 u8 x[2] u64 u32 u32 u8 u8 u16 u16")
 * ```
 */
var HIDAdapterEvent;
(function (HIDAdapterEvent) {
    /**
     * Event that notifies clients that the server has swapped to a new configuration or changed key bindings.
     */
    HIDAdapterEvent[HIDAdapterEvent["Changed"] = 3] = "Changed";
})(HIDAdapterEvent || (HIDAdapterEvent = {}));
var HidKeyboardModifiers;
(function (HidKeyboardModifiers) {
    HidKeyboardModifiers[HidKeyboardModifiers["None"] = 0] = "None";
    HidKeyboardModifiers[HidKeyboardModifiers["LeftControl"] = 1] = "LeftControl";
    HidKeyboardModifiers[HidKeyboardModifiers["LeftShift"] = 2] = "LeftShift";
    HidKeyboardModifiers[HidKeyboardModifiers["LeftAlt"] = 4] = "LeftAlt";
    HidKeyboardModifiers[HidKeyboardModifiers["LeftGUI"] = 8] = "LeftGUI";
    HidKeyboardModifiers[HidKeyboardModifiers["RightControl"] = 16] = "RightControl";
    HidKeyboardModifiers[HidKeyboardModifiers["RightShift"] = 32] = "RightShift";
    HidKeyboardModifiers[HidKeyboardModifiers["RightAlt"] = 64] = "RightAlt";
    HidKeyboardModifiers[HidKeyboardModifiers["RightGUI"] = 128] = "RightGUI";
})(HidKeyboardModifiers || (HidKeyboardModifiers = {}));
var HidKeyboardAction;
(function (HidKeyboardAction) {
    HidKeyboardAction[HidKeyboardAction["Press"] = 0] = "Press";
    HidKeyboardAction[HidKeyboardAction["Up"] = 1] = "Up";
    HidKeyboardAction[HidKeyboardAction["Down"] = 2] = "Down";
})(HidKeyboardAction || (HidKeyboardAction = {}));
var HidKeyboardCmd;
(function (HidKeyboardCmd) {
    /**
     * Presses a key or a sequence of keys down.
     *
     * ```
     * const [rest] = jdunpack<[([number, HidKeyboardModifiers, HidKeyboardAction])[]]>(buf, "r: u16 u8 u8")
     * const [selector, modifiers, action] = rest[0]
     * ```
     */
    HidKeyboardCmd[HidKeyboardCmd["Key"] = 128] = "Key";
    /**
     * No args. Clears all pressed keys.
     */
    HidKeyboardCmd[HidKeyboardCmd["Clear"] = 129] = "Clear";
})(HidKeyboardCmd || (HidKeyboardCmd = {}));
var HidMouseButton;
(function (HidMouseButton) {
    HidMouseButton[HidMouseButton["Left"] = 1] = "Left";
    HidMouseButton[HidMouseButton["Right"] = 2] = "Right";
    HidMouseButton[HidMouseButton["Middle"] = 4] = "Middle";
})(HidMouseButton || (HidMouseButton = {}));
var HidMouseButtonEvent;
(function (HidMouseButtonEvent) {
    HidMouseButtonEvent[HidMouseButtonEvent["Up"] = 1] = "Up";
    HidMouseButtonEvent[HidMouseButtonEvent["Down"] = 2] = "Down";
    HidMouseButtonEvent[HidMouseButtonEvent["Click"] = 3] = "Click";
    HidMouseButtonEvent[HidMouseButtonEvent["DoubleClick"] = 4] = "DoubleClick";
})(HidMouseButtonEvent || (HidMouseButtonEvent = {}));
var HidMouseCmd;
(function (HidMouseCmd) {
    /**
     * Sets the up/down state of one or more buttons.
     * A ``Click`` is the same as ``Down`` followed by ``Up`` after 100ms.
     * A ``DoubleClick`` is two clicks with ``150ms`` gap between them (that is, ``100ms`` first click, ``150ms`` gap, ``100ms`` second click).
     *
     * ```
     * const [buttons, event] = jdunpack<[HidMouseButton, HidMouseButtonEvent]>(buf, "u16 u8")
     * ```
     */
    HidMouseCmd[HidMouseCmd["SetButton"] = 128] = "SetButton";
    /**
     * Moves the mouse by the distance specified.
     * If the time is positive, it specifies how long to make the move.
     *
     * ```
     * const [dx, dy, time] = jdunpack<[number, number, number]>(buf, "i16 i16 u16")
     * ```
     */
    HidMouseCmd[HidMouseCmd["Move"] = 129] = "Move";
    /**
     * Turns the wheel up or down. Positive if scrolling up.
     * If the time is positive, it specifies how long to make the move.
     *
     * ```
     * const [dy, time] = jdunpack<[number, number]>(buf, "i16 u16")
     * ```
     */
    HidMouseCmd[HidMouseCmd["Wheel"] = 130] = "Wheel";
})(HidMouseCmd || (HidMouseCmd = {}));
var HumidityReg;
(function (HumidityReg) {
    /**
     * Read-only %RH u22.10 (uint32_t). The relative humidity in percentage of full water saturation.
     *
     * ```
     * const [humidity] = jdunpack<[number]>(buf, "u22.10")
     * ```
     */
    HumidityReg[HumidityReg["Humidity"] = 257] = "Humidity";
    /**
     * Read-only %RH u22.10 (uint32_t). The real humidity is between `humidity - humidity_error` and `humidity + humidity_error`.
     *
     * ```
     * const [humidityError] = jdunpack<[number]>(buf, "u22.10")
     * ```
     */
    HumidityReg[HumidityReg["HumidityError"] = 262] = "HumidityError";
    /**
     * Constant %RH u22.10 (uint32_t). Lowest humidity that can be reported.
     *
     * ```
     * const [minHumidity] = jdunpack<[number]>(buf, "u22.10")
     * ```
     */
    HumidityReg[HumidityReg["MinHumidity"] = 260] = "MinHumidity";
    /**
     * Constant %RH u22.10 (uint32_t). Highest humidity that can be reported.
     *
     * ```
     * const [maxHumidity] = jdunpack<[number]>(buf, "u22.10")
     * ```
     */
    HumidityReg[HumidityReg["MaxHumidity"] = 261] = "MaxHumidity";
})(HumidityReg || (HumidityReg = {}));
var IlluminanceReg;
(function (IlluminanceReg) {
    /**
     * Read-only lux u22.10 (uint32_t). The amount of illuminance, as lumens per square metre.
     *
     * ```
     * const [light] = jdunpack<[number]>(buf, "u22.10")
     * ```
     */
    IlluminanceReg[IlluminanceReg["Light"] = 257] = "Light";
    /**
     * Read-only lux u22.10 (uint32_t). Error on the reported sensor value.
     *
     * ```
     * const [lightError] = jdunpack<[number]>(buf, "u22.10")
     * ```
     */
    IlluminanceReg[IlluminanceReg["LightError"] = 262] = "LightError";
})(IlluminanceReg || (IlluminanceReg = {}));
var IndexedScreenCmd;
(function (IndexedScreenCmd) {
    /**
     * Sets the update window for subsequent `set_pixels` commands.
     *
     * ```
     * const [x, y, width, height] = jdunpack<[number, number, number, number]>(buf, "u16 u16 u16 u16")
     * ```
     */
    IndexedScreenCmd[IndexedScreenCmd["StartUpdate"] = 129] = "StartUpdate";
    /**
     * Argument: pixels bytes. Set pixels in current window, according to current palette.
     * Each "line" of data is aligned to a byte.
     *
     * ```
     * const [pixels] = jdunpack<[Uint8Array]>(buf, "b")
     * ```
     */
    IndexedScreenCmd[IndexedScreenCmd["SetPixels"] = 131] = "SetPixels";
})(IndexedScreenCmd || (IndexedScreenCmd = {}));
var IndexedScreenReg;
(function (IndexedScreenReg) {
    /**
     * Read-write ratio u0.8 (uint8_t). Set backlight brightness.
     * If set to `0` the display may go to sleep.
     *
     * ```
     * const [brightness] = jdunpack<[number]>(buf, "u0.8")
     * ```
     */
    IndexedScreenReg[IndexedScreenReg["Brightness"] = 1] = "Brightness";
    /**
     * The current palette.
     * The color entry repeats `1 << bits_per_pixel` times.
     * This register may be write-only.
     *
     * ```
     * const [rest] = jdunpack<[([number, number, number])[]]>(buf, "r: u8 u8 u8 x[1]")
     * const [blue, green, red] = rest[0]
     * ```
     */
    IndexedScreenReg[IndexedScreenReg["Palette"] = 128] = "Palette";
    /**
     * Constant bit uint8_t. Determines the number of palette entries.
     * Typical values are 1, 2, 4, or 8.
     *
     * ```
     * const [bitsPerPixel] = jdunpack<[number]>(buf, "u8")
     * ```
     */
    IndexedScreenReg[IndexedScreenReg["BitsPerPixel"] = 384] = "BitsPerPixel";
    /**
     * Constant px uint16_t. Screen width in "natural" orientation.
     *
     * ```
     * const [width] = jdunpack<[number]>(buf, "u16")
     * ```
     */
    IndexedScreenReg[IndexedScreenReg["Width"] = 385] = "Width";
    /**
     * Constant px uint16_t. Screen height in "natural" orientation.
     *
     * ```
     * const [height] = jdunpack<[number]>(buf, "u16")
     * ```
     */
    IndexedScreenReg[IndexedScreenReg["Height"] = 386] = "Height";
    /**
     * Read-write bool (uint8_t). If true, consecutive pixels in the "width" direction are sent next to each other (this is typical for graphics cards).
     * If false, consecutive pixels in the "height" direction are sent next to each other.
     * For embedded screen controllers, this is typically true iff `width < height`
     * (in other words, it's only true for portrait orientation screens).
     * Some controllers may allow the user to change this (though the refresh order may not be optimal then).
     * This is independent of the `rotation` register.
     *
     * ```
     * const [widthMajor] = jdunpack<[number]>(buf, "u8")
     * ```
     */
    IndexedScreenReg[IndexedScreenReg["WidthMajor"] = 129] = "WidthMajor";
    /**
     * Read-write px uint8_t. Every pixel sent over wire is represented by `up_sampling x up_sampling` square of physical pixels.
     * Some displays may allow changing this (which will also result in changes to `width` and `height`).
     * Typical values are 1 and 2.
     *
     * ```
     * const [upSampling] = jdunpack<[number]>(buf, "u8")
     * ```
     */
    IndexedScreenReg[IndexedScreenReg["UpSampling"] = 130] = "UpSampling";
    /**
     * Read-write ° uint16_t. Possible values are 0, 90, 180 and 270 only.
     * Write to this register do not affect `width` and `height` registers,
     * and may be ignored by some screens.
     *
     * ```
     * const [rotation] = jdunpack<[number]>(buf, "u16")
     * ```
     */
    IndexedScreenReg[IndexedScreenReg["Rotation"] = 131] = "Rotation";
})(IndexedScreenReg || (IndexedScreenReg = {}));
var JoystickButtons;
(function (JoystickButtons) {
    JoystickButtons[JoystickButtons["Left"] = 1] = "Left";
    JoystickButtons[JoystickButtons["Up"] = 2] = "Up";
    JoystickButtons[JoystickButtons["Right"] = 4] = "Right";
    JoystickButtons[JoystickButtons["Down"] = 8] = "Down";
    JoystickButtons[JoystickButtons["A"] = 16] = "A";
    JoystickButtons[JoystickButtons["B"] = 32] = "B";
    JoystickButtons[JoystickButtons["Menu"] = 64] = "Menu";
    JoystickButtons[JoystickButtons["Select"] = 128] = "Select";
    JoystickButtons[JoystickButtons["Reset"] = 256] = "Reset";
    JoystickButtons[JoystickButtons["Exit"] = 512] = "Exit";
    JoystickButtons[JoystickButtons["X"] = 1024] = "X";
    JoystickButtons[JoystickButtons["Y"] = 2048] = "Y";
})(JoystickButtons || (JoystickButtons = {}));
var JoystickVariant;
(function (JoystickVariant) {
    JoystickVariant[JoystickVariant["Thumb"] = 1] = "Thumb";
    JoystickVariant[JoystickVariant["ArcadeBall"] = 2] = "ArcadeBall";
    JoystickVariant[JoystickVariant["ArcadeStick"] = 3] = "ArcadeStick";
    JoystickVariant[JoystickVariant["Gamepad"] = 4] = "Gamepad";
})(JoystickVariant || (JoystickVariant = {}));
var JoystickReg;
(function (JoystickReg) {
    /**
     * If the joystick is analog, the directional buttons should be "simulated", based on joystick position
     * (`Left` is `{ x = -1, y = 0 }`, `Up` is `{ x = 0, y = -1}`).
     * If the joystick is digital, then each direction will read as either `-1`, `0`, or `1` (in fixed representation).
     * The primary button on the joystick is `A`.
     *
     * ```
     * const [buttons, x, y] = jdunpack<[JoystickButtons, number, number]>(buf, "u32 i1.15 i1.15")
     * ```
     */
    JoystickReg[JoystickReg["Direction"] = 257] = "Direction";
    /**
     * Constant Variant (uint8_t). The type of physical joystick.
     *
     * ```
     * const [variant] = jdunpack<[JoystickVariant]>(buf, "u8")
     * ```
     */
    JoystickReg[JoystickReg["Variant"] = 263] = "Variant";
    /**
     * Constant Buttons (uint32_t). Indicates a bitmask of the buttons that are mounted on the joystick.
     * If the `Left`/`Up`/`Right`/`Down` buttons are marked as available here, the joystick is digital.
     * Even when marked as not available, they will still be simulated based on the analog joystick.
     *
     * ```
     * const [buttonsAvailable] = jdunpack<[JoystickButtons]>(buf, "u32")
     * ```
     */
    JoystickReg[JoystickReg["ButtonsAvailable"] = 384] = "ButtonsAvailable";
})(JoystickReg || (JoystickReg = {}));
var JoystickEvent;
(function (JoystickEvent) {
    /**
     * Argument: buttons Buttons (uint32_t). Emitted whenever the state of buttons changes.
     *
     * ```
     * const [buttons] = jdunpack<[JoystickButtons]>(buf, "u32")
     * ```
     */
    JoystickEvent[JoystickEvent["ButtonsChanged"] = 3] = "ButtonsChanged";
})(JoystickEvent || (JoystickEvent = {}));
var LedVariant;
(function (LedVariant) {
    LedVariant[LedVariant["ThroughHole"] = 1] = "ThroughHole";
    LedVariant[LedVariant["SMD"] = 2] = "SMD";
    LedVariant[LedVariant["Power"] = 3] = "Power";
    LedVariant[LedVariant["Bead"] = 4] = "Bead";
})(LedVariant || (LedVariant = {}));
var LedCmd;
(function (LedCmd) {
    /**
     * This has the same semantics as `set_status_light` in the control service.
     *
     * ```
     * const [toRed, toGreen, toBlue, speed] = jdunpack<[number, number, number, number]>(buf, "u8 u8 u8 u8")
     * ```
     */
    LedCmd[LedCmd["Animate"] = 128] = "Animate";
})(LedCmd || (LedCmd = {}));
var LedReg;
(function (LedReg) {
    /**
     * The current color of the LED.
     *
     * ```
     * const [red, green, blue] = jdunpack<[number, number, number]>(buf, "u8 u8 u8")
     * ```
     */
    LedReg[LedReg["Color"] = 384] = "Color";
    /**
     * Read-write mA uint16_t. Limit the power drawn by the light-strip (and controller).
     *
     * ```
     * const [maxPower] = jdunpack<[number]>(buf, "u16")
     * ```
     */
    LedReg[LedReg["MaxPower"] = 7] = "MaxPower";
    /**
     * Constant uint16_t. If known, specifies the number of LEDs in parallel on this device.
     *
     * ```
     * const [ledCount] = jdunpack<[number]>(buf, "u16")
     * ```
     */
    LedReg[LedReg["LedCount"] = 387] = "LedCount";
    /**
     * Constant nm uint16_t. If monochrome LED, specifies the wave length of the LED.
     *
     * ```
     * const [waveLength] = jdunpack<[number]>(buf, "u16")
     * ```
     */
    LedReg[LedReg["WaveLength"] = 385] = "WaveLength";
    /**
     * Constant mcd uint16_t. The luminous intensity of the LED, at full value, in micro candella.
     *
     * ```
     * const [luminousIntensity] = jdunpack<[number]>(buf, "u16")
     * ```
     */
    LedReg[LedReg["LuminousIntensity"] = 386] = "LuminousIntensity";
    /**
     * Constant Variant (uint8_t). The physical type of LED.
     *
     * ```
     * const [variant] = jdunpack<[LedVariant]>(buf, "u8")
     * ```
     */
    LedReg[LedReg["Variant"] = 263] = "Variant";
})(LedReg || (LedReg = {}));
var LedMatrixReg;
(function (LedMatrixReg) {
    /**
     * Read-write bytes. The state of the screen where pixel on/off state is
     * stored as a bit, column by column. The column should be byte aligned.
     *
     * ```
     * const [leds] = jdunpack<[Uint8Array]>(buf, "b")
     * ```
     */
    LedMatrixReg[LedMatrixReg["Leds"] = 2] = "Leds";
    /**
     * Read-write ratio u0.8 (uint8_t). Reads the general brightness of the LEDs. ``0`` when the screen is off.
     *
     * ```
     * const [brightness] = jdunpack<[number]>(buf, "u0.8")
     * ```
     */
    LedMatrixReg[LedMatrixReg["Brightness"] = 1] = "Brightness";
    /**
     * Constant # uint16_t. Number of rows on the screen
     *
     * ```
     * const [rows] = jdunpack<[number]>(buf, "u16")
     * ```
     */
    LedMatrixReg[LedMatrixReg["Rows"] = 385] = "Rows";
    /**
     * Constant # uint16_t. Number of columns on the screen
     *
     * ```
     * const [columns] = jdunpack<[number]>(buf, "u16")
     * ```
     */
    LedMatrixReg[LedMatrixReg["Columns"] = 386] = "Columns";
})(LedMatrixReg || (LedMatrixReg = {}));
var LedPixelLightType;
(function (LedPixelLightType) {
    LedPixelLightType[LedPixelLightType["WS2812B_GRB"] = 0] = "WS2812B_GRB";
    LedPixelLightType[LedPixelLightType["APA102"] = 16] = "APA102";
    LedPixelLightType[LedPixelLightType["SK9822"] = 17] = "SK9822";
})(LedPixelLightType || (LedPixelLightType = {}));
var LedPixelVariant;
(function (LedPixelVariant) {
    LedPixelVariant[LedPixelVariant["Strip"] = 1] = "Strip";
    LedPixelVariant[LedPixelVariant["Ring"] = 2] = "Ring";
    LedPixelVariant[LedPixelVariant["Stick"] = 3] = "Stick";
    LedPixelVariant[LedPixelVariant["Jewel"] = 4] = "Jewel";
    LedPixelVariant[LedPixelVariant["Matrix"] = 5] = "Matrix";
})(LedPixelVariant || (LedPixelVariant = {}));
var LedPixelReg;
(function (LedPixelReg) {
    /**
     * Read-write ratio u0.8 (uint8_t). Set the luminosity of the strip.
     * At `0` the power to the strip is completely shut down.
     *
     * ```
     * const [brightness] = jdunpack<[number]>(buf, "u0.8")
     * ```
     */
    LedPixelReg[LedPixelReg["Brightness"] = 1] = "Brightness";
    /**
     * Read-only ratio u0.8 (uint8_t). This is the luminosity actually applied to the strip.
     * May be lower than `brightness` if power-limited by the `max_power` register.
     * It will rise slowly (few seconds) back to `brightness` is limits are no longer required.
     *
     * ```
     * const [actualBrightness] = jdunpack<[number]>(buf, "u0.8")
     * ```
     */
    LedPixelReg[LedPixelReg["ActualBrightness"] = 384] = "ActualBrightness";
    /**
     * Read-write LightType (uint8_t). Specifies the type of light strip connected to controller.
     * Controllers which are sold with lights should default to the correct type
     * and could not allow change.
     *
     * ```
     * const [lightType] = jdunpack<[LedPixelLightType]>(buf, "u8")
     * ```
     */
    LedPixelReg[LedPixelReg["LightType"] = 128] = "LightType";
    /**
     * Read-write # uint16_t. Specifies the number of pixels in the strip.
     * Controllers which are sold with lights should default to the correct length
     * and could not allow change. Increasing length at runtime leads to ineffective use of memory and may lead to controller reboot.
     *
     * ```
     * const [numPixels] = jdunpack<[number]>(buf, "u16")
     * ```
     */
    LedPixelReg[LedPixelReg["NumPixels"] = 129] = "NumPixels";
    /**
     * Read-write # uint16_t. If the LED pixel strip is a matrix, specifies the number of columns. Otherwise, a square shape is assumed. Controllers which are sold with lights should default to the correct length
     * and could not allow change. Increasing length at runtime leads to ineffective use of memory and may lead to controller reboot.
     *
     * ```
     * const [numColumns] = jdunpack<[number]>(buf, "u16")
     * ```
     */
    LedPixelReg[LedPixelReg["NumColumns"] = 131] = "NumColumns";
    /**
     * Read-write mA uint16_t. Limit the power drawn by the light-strip (and controller).
     *
     * ```
     * const [maxPower] = jdunpack<[number]>(buf, "u16")
     * ```
     */
    LedPixelReg[LedPixelReg["MaxPower"] = 7] = "MaxPower";
    /**
     * Constant # uint16_t. The maximum supported number of pixels.
     * All writes to `num_pixels` are clamped to `max_pixels`.
     *
     * ```
     * const [maxPixels] = jdunpack<[number]>(buf, "u16")
     * ```
     */
    LedPixelReg[LedPixelReg["MaxPixels"] = 385] = "MaxPixels";
    /**
     * Read-write # uint16_t. How many times to repeat the program passed in `run` command.
     * Should be set before the `run` command.
     * Setting to `0` means to repeat forever.
     *
     * ```
     * const [numRepeats] = jdunpack<[number]>(buf, "u16")
     * ```
     */
    LedPixelReg[LedPixelReg["NumRepeats"] = 130] = "NumRepeats";
    /**
     * Constant Variant (uint8_t). Specifies the shape of the light strip.
     *
     * ```
     * const [variant] = jdunpack<[LedPixelVariant]>(buf, "u8")
     * ```
     */
    LedPixelReg[LedPixelReg["Variant"] = 263] = "Variant";
})(LedPixelReg || (LedPixelReg = {}));
var LedPixelCmd;
(function (LedPixelCmd) {
    /**
     * Argument: program bytes. Run the given light "program". See service description for details.
     *
     * ```
     * const [program] = jdunpack<[Uint8Array]>(buf, "b")
     * ```
     */
    LedPixelCmd[LedPixelCmd["Run"] = 129] = "Run";
})(LedPixelCmd || (LedPixelCmd = {}));
var LightLevelVariant;
(function (LightLevelVariant) {
    LightLevelVariant[LightLevelVariant["PhotoResistor"] = 1] = "PhotoResistor";
    LightLevelVariant[LightLevelVariant["LEDMatrix"] = 2] = "LEDMatrix";
    LightLevelVariant[LightLevelVariant["Ambient"] = 3] = "Ambient";
})(LightLevelVariant || (LightLevelVariant = {}));
var LightLevelReg;
(function (LightLevelReg) {
    /**
     * Read-only ratio u0.16 (uint16_t). Detect light level
     *
     * ```
     * const [lightLevel] = jdunpack<[number]>(buf, "u0.16")
     * ```
     */
    LightLevelReg[LightLevelReg["LightLevel"] = 257] = "LightLevel";
    /**
     * Constant Variant (uint8_t). The type of physical sensor.
     *
     * ```
     * const [variant] = jdunpack<[LightLevelVariant]>(buf, "u8")
     * ```
     */
    LightLevelReg[LightLevelReg["Variant"] = 263] = "Variant";
})(LightLevelReg || (LightLevelReg = {}));
var LoggerPriority;
(function (LoggerPriority) {
    LoggerPriority[LoggerPriority["Debug"] = 0] = "Debug";
    LoggerPriority[LoggerPriority["Log"] = 1] = "Log";
    LoggerPriority[LoggerPriority["Warning"] = 2] = "Warning";
    LoggerPriority[LoggerPriority["Error"] = 3] = "Error";
    LoggerPriority[LoggerPriority["Silent"] = 4] = "Silent";
})(LoggerPriority || (LoggerPriority = {}));
var LoggerReg;
(function (LoggerReg) {
    /**
     * Read-write Priority (uint8_t). Messages with level lower than this won't be emitted. The default setting may vary.
     * Loggers should revert this to their default setting if the register has not been
     * updated in 3000ms, and also keep the lowest setting they have seen in the last 1500ms.
     * Thus, clients should write this register every 1000ms and ignore messages which are
     * too verbose for them.
     *
     * ```
     * const [minPriority] = jdunpack<[LoggerPriority]>(buf, "u8")
     * ```
     */
    LoggerReg[LoggerReg["MinPriority"] = 128] = "MinPriority";
})(LoggerReg || (LoggerReg = {}));
var LoggerCmd;
(function (LoggerCmd) {
    /**
     * Argument: message string (bytes). Report a message.
     *
     * ```
     * const [message] = jdunpack<[string]>(buf, "s")
     * ```
     */
    LoggerCmd[LoggerCmd["Debug"] = 128] = "Debug";
    /**
     * Argument: message string (bytes). Report a message.
     *
     * ```
     * const [message] = jdunpack<[string]>(buf, "s")
     * ```
     */
    LoggerCmd[LoggerCmd["Log"] = 129] = "Log";
    /**
     * Argument: message string (bytes). Report a message.
     *
     * ```
     * const [message] = jdunpack<[string]>(buf, "s")
     * ```
     */
    LoggerCmd[LoggerCmd["Warn"] = 130] = "Warn";
    /**
     * Argument: message string (bytes). Report a message.
     *
     * ```
     * const [message] = jdunpack<[string]>(buf, "s")
     * ```
     */
    LoggerCmd[LoggerCmd["Error"] = 131] = "Error";
})(LoggerCmd || (LoggerCmd = {}));
var MagnetometerReg;
(function (MagnetometerReg) {
    /**
     * Indicates the current magnetic field on magnetometer.
     * For reference: `1 mgauss` is `100 nT` (and `1 gauss` is `100 000 nT`).
     *
     * ```
     * const [x, y, z] = jdunpack<[number, number, number]>(buf, "i32 i32 i32")
     * ```
     */
    MagnetometerReg[MagnetometerReg["Forces"] = 257] = "Forces";
    /**
     * Read-only nT int32_t. Error on the readings.
     *
     * ```
     * const [forcesError] = jdunpack<[number]>(buf, "i32")
     * ```
     */
    MagnetometerReg[MagnetometerReg["ForcesError"] = 262] = "ForcesError";
})(MagnetometerReg || (MagnetometerReg = {}));
var MagnetometerCmd;
(function (MagnetometerCmd) {
    /**
     * No args. Forces a calibration sequence where the user/device
     * might have to rotate to be calibrated.
     */
    MagnetometerCmd[MagnetometerCmd["Calibrate"] = 2] = "Calibrate";
})(MagnetometerCmd || (MagnetometerCmd = {}));
var MatrixKeypadVariant;
(function (MatrixKeypadVariant) {
    MatrixKeypadVariant[MatrixKeypadVariant["Membrane"] = 1] = "Membrane";
    MatrixKeypadVariant[MatrixKeypadVariant["Keyboard"] = 2] = "Keyboard";
    MatrixKeypadVariant[MatrixKeypadVariant["Elastomer"] = 3] = "Elastomer";
    MatrixKeypadVariant[MatrixKeypadVariant["ElastomerLEDPixel"] = 4] = "ElastomerLEDPixel";
})(MatrixKeypadVariant || (MatrixKeypadVariant = {}));
var MatrixKeypadReg;
(function (MatrixKeypadReg) {
    /**
     * Read-only. The coordinate of the button currently pressed. Keys are zero-indexed from left to right, top to bottom:
     * ``row = index / columns``, ``column = index % columns``.
     *
     * ```
     * const [index] = jdunpack<[number[]]>(buf, "u8[]")
     * ```
     */
    MatrixKeypadReg[MatrixKeypadReg["Pressed"] = 257] = "Pressed";
    /**
     * Constant uint8_t. Number of rows in the matrix
     *
     * ```
     * const [rows] = jdunpack<[number]>(buf, "u8")
     * ```
     */
    MatrixKeypadReg[MatrixKeypadReg["Rows"] = 384] = "Rows";
    /**
     * Constant uint8_t. Number of columns in the matrix
     *
     * ```
     * const [columns] = jdunpack<[number]>(buf, "u8")
     * ```
     */
    MatrixKeypadReg[MatrixKeypadReg["Columns"] = 385] = "Columns";
    /**
     * Constant. The characters printed on the keys if any, in indexing sequence.
     *
     * ```
     * const [label] = jdunpack<[string[]]>(buf, "z[]")
     * ```
     */
    MatrixKeypadReg[MatrixKeypadReg["Labels"] = 386] = "Labels";
    /**
     * Constant Variant (uint8_t). The type of physical keypad. If the variant is ``ElastomerLEDPixel``
     * and the next service on the device is a ``LEDPixel`` service, it is considered
     * as the service controlling the LED pixel on the keypad.
     *
     * ```
     * const [variant] = jdunpack<[MatrixKeypadVariant]>(buf, "u8")
     * ```
     */
    MatrixKeypadReg[MatrixKeypadReg["Variant"] = 263] = "Variant";
})(MatrixKeypadReg || (MatrixKeypadReg = {}));
var MatrixKeypadEvent;
(function (MatrixKeypadEvent) {
    /**
     * Argument: uint8_t. Emitted when a key, at the given index, goes from inactive (`pressed == 0`) to active.
     *
     * ```
     * const [down] = jdunpack<[number]>(buf, "u8")
     * ```
     */
    MatrixKeypadEvent[MatrixKeypadEvent["Down"] = 1] = "Down";
    /**
     * Argument: uint8_t. Emitted when a key, at the given index, goes from active (`pressed == 1`) to inactive.
     *
     * ```
     * const [up] = jdunpack<[number]>(buf, "u8")
     * ```
     */
    MatrixKeypadEvent[MatrixKeypadEvent["Up"] = 2] = "Up";
    /**
     * Argument: uint8_t. Emitted together with `up` when the press time was not longer than 500ms.
     *
     * ```
     * const [click] = jdunpack<[number]>(buf, "u8")
     * ```
     */
    MatrixKeypadEvent[MatrixKeypadEvent["Click"] = 128] = "Click";
    /**
     * Argument: uint8_t. Emitted together with `up` when the press time was more than 500ms.
     *
     * ```
     * const [longClick] = jdunpack<[number]>(buf, "u8")
     * ```
     */
    MatrixKeypadEvent[MatrixKeypadEvent["LongClick"] = 129] = "LongClick";
})(MatrixKeypadEvent || (MatrixKeypadEvent = {}));
var MicrophoneCmd;
(function (MicrophoneCmd) {
    /**
     * The samples will be streamed back over the `samples` pipe.
     * If `num_samples` is `0`, streaming will only stop when the pipe is closed.
     * Otherwise the specified number of samples is streamed.
     * Samples are sent as `i16`.
     *
     * ```
     * const [samples, numSamples] = jdunpack<[Uint8Array, number]>(buf, "b[12] u32")
     * ```
     */
    MicrophoneCmd[MicrophoneCmd["Sample"] = 129] = "Sample";
})(MicrophoneCmd || (MicrophoneCmd = {}));
var MicrophoneReg;
(function (MicrophoneReg) {
    /**
     * Read-write μs uint32_t. Get or set microphone sampling period.
     * Sampling rate is `1_000_000 / sampling_period Hz`.
     *
     * ```
     * const [samplingPeriod] = jdunpack<[number]>(buf, "u32")
     * ```
     */
    MicrophoneReg[MicrophoneReg["SamplingPeriod"] = 128] = "SamplingPeriod";
})(MicrophoneReg || (MicrophoneReg = {}));
var MidiOutputReg;
(function (MidiOutputReg) {
    /**
     * Read-write bool (uint8_t). Opens or closes the port to the MIDI device
     *
     * ```
     * const [enabled] = jdunpack<[number]>(buf, "u8")
     * ```
     */
    MidiOutputReg[MidiOutputReg["Enabled"] = 1] = "Enabled";
})(MidiOutputReg || (MidiOutputReg = {}));
var MidiOutputCmd;
(function (MidiOutputCmd) {
    /**
     * No args. Clears any pending send data that has not yet been sent from the MIDIOutput's queue.
     */
    MidiOutputCmd[MidiOutputCmd["Clear"] = 128] = "Clear";
    /**
     * Argument: data bytes. Enqueues the message to be sent to the corresponding MIDI port
     *
     * ```
     * const [data] = jdunpack<[Uint8Array]>(buf, "b")
     * ```
     */
    MidiOutputCmd[MidiOutputCmd["Send"] = 129] = "Send";
})(MidiOutputCmd || (MidiOutputCmd = {}));
var ModelRunnerModelFormat;
(function (ModelRunnerModelFormat) {
    ModelRunnerModelFormat[ModelRunnerModelFormat["TFLite"] = 860636756] = "TFLite";
    ModelRunnerModelFormat[ModelRunnerModelFormat["ML4F"] = 809963362] = "ML4F";
    ModelRunnerModelFormat[ModelRunnerModelFormat["EdgeImpulseCompiled"] = 810961221] = "EdgeImpulseCompiled";
})(ModelRunnerModelFormat || (ModelRunnerModelFormat = {}));
var ModelRunnerCmd;
(function (ModelRunnerCmd) {
    /**
     * Argument: model_size B uint32_t. Open pipe for streaming in the model. The size of the model has to be declared upfront.
     * The model is streamed over regular pipe data packets.
     * The format supported by this instance of the service is specified in `format` register.
     * When the pipe is closed, the model is written all into flash, and the device running the service may reset.
     *
     * ```
     * const [modelSize] = jdunpack<[number]>(buf, "u32")
     * ```
     */
    ModelRunnerCmd[ModelRunnerCmd["SetModel"] = 128] = "SetModel";
    /**
     * report SetModel
     * ```
     * const [modelPort] = jdunpack<[number]>(buf, "u16")
     * ```
     */
    /**
     * Argument: outputs pipe (bytes). Open channel that can be used to manually invoke the model. When enough data is sent over the `inputs` pipe, the model is invoked,
     * and results are send over the `outputs` pipe.
     *
     * ```
     * const [outputs] = jdunpack<[Uint8Array]>(buf, "b[12]")
     * ```
     */
    ModelRunnerCmd[ModelRunnerCmd["Predict"] = 129] = "Predict";
    /**
     * report Predict
     * ```
     * const [inputs] = jdunpack<[number]>(buf, "u16")
     * ```
     */
})(ModelRunnerCmd || (ModelRunnerCmd = {}));
var ModelRunnerReg;
(function (ModelRunnerReg) {
    /**
     * Read-write uint16_t. When register contains `N > 0`, run the model automatically every time new `N` samples are collected.
     * Model may be run less often if it takes longer to run than `N * sampling_interval`.
     * The `outputs` register will stream its value after each run.
     * This register is not stored in flash.
     *
     * ```
     * const [autoInvokeEvery] = jdunpack<[number]>(buf, "u16")
     * ```
     */
    ModelRunnerReg[ModelRunnerReg["AutoInvokeEvery"] = 128] = "AutoInvokeEvery";
    /**
     * Read-only. Results of last model invocation as `float32` array.
     *
     * ```
     * const [output] = jdunpack<[number[]]>(buf, "f32[]")
     * ```
     */
    ModelRunnerReg[ModelRunnerReg["Outputs"] = 257] = "Outputs";
    /**
     * Read-only. The shape of the input tensor.
     *
     * ```
     * const [dimension] = jdunpack<[number[]]>(buf, "u16[]")
     * ```
     */
    ModelRunnerReg[ModelRunnerReg["InputShape"] = 384] = "InputShape";
    /**
     * Read-only. The shape of the output tensor.
     *
     * ```
     * const [dimension] = jdunpack<[number[]]>(buf, "u16[]")
     * ```
     */
    ModelRunnerReg[ModelRunnerReg["OutputShape"] = 385] = "OutputShape";
    /**
     * Read-only μs uint32_t. The time consumed in last model execution.
     *
     * ```
     * const [lastRunTime] = jdunpack<[number]>(buf, "u32")
     * ```
     */
    ModelRunnerReg[ModelRunnerReg["LastRunTime"] = 386] = "LastRunTime";
    /**
     * Read-only B uint32_t. Number of RAM bytes allocated for model execution.
     *
     * ```
     * const [allocatedArenaSize] = jdunpack<[number]>(buf, "u32")
     * ```
     */
    ModelRunnerReg[ModelRunnerReg["AllocatedArenaSize"] = 387] = "AllocatedArenaSize";
    /**
     * Read-only B uint32_t. The size of the model in bytes.
     *
     * ```
     * const [modelSize] = jdunpack<[number]>(buf, "u32")
     * ```
     */
    ModelRunnerReg[ModelRunnerReg["ModelSize"] = 388] = "ModelSize";
    /**
     * Read-only string (bytes). Textual description of last error when running or loading model (if any).
     *
     * ```
     * const [lastError] = jdunpack<[string]>(buf, "s")
     * ```
     */
    ModelRunnerReg[ModelRunnerReg["LastError"] = 389] = "LastError";
    /**
     * Constant ModelFormat (uint32_t). The type of ML models supported by this service.
     * `TFLite` is flatbuffer `.tflite` file.
     * `ML4F` is compiled machine code model for Cortex-M4F.
     * The format is typically present as first or second little endian word of model file.
     *
     * ```
     * const [format] = jdunpack<[ModelRunnerModelFormat]>(buf, "u32")
     * ```
     */
    ModelRunnerReg[ModelRunnerReg["Format"] = 390] = "Format";
    /**
     * Constant uint32_t. A version number for the format.
     *
     * ```
     * const [formatVersion] = jdunpack<[number]>(buf, "u32")
     * ```
     */
    ModelRunnerReg[ModelRunnerReg["FormatVersion"] = 391] = "FormatVersion";
    /**
     * Constant bool (uint8_t). If present and true this service can run models independently of other
     * instances of this service on the device.
     *
     * ```
     * const [parallel] = jdunpack<[number]>(buf, "u8")
     * ```
     */
    ModelRunnerReg[ModelRunnerReg["Parallel"] = 392] = "Parallel";
})(ModelRunnerReg || (ModelRunnerReg = {}));
var MotionVariant;
(function (MotionVariant) {
    MotionVariant[MotionVariant["PIR"] = 1] = "PIR";
})(MotionVariant || (MotionVariant = {}));
var MotionReg;
(function (MotionReg) {
    /**
     * Read-only bool (uint8_t). Reports is movement is currently detected by the sensor.
     *
     * ```
     * const [moving] = jdunpack<[number]>(buf, "u8")
     * ```
     */
    MotionReg[MotionReg["Moving"] = 257] = "Moving";
    /**
     * Constant m u16.16 (uint32_t). Maximum distance where objects can be detected.
     *
     * ```
     * const [maxDistance] = jdunpack<[number]>(buf, "u16.16")
     * ```
     */
    MotionReg[MotionReg["MaxDistance"] = 384] = "MaxDistance";
    /**
     * Constant ° uint16_t. Opening of the field of view
     *
     * ```
     * const [angle] = jdunpack<[number]>(buf, "u16")
     * ```
     */
    MotionReg[MotionReg["Angle"] = 385] = "Angle";
    /**
     * Constant Variant (uint8_t). Type of physical sensor
     *
     * ```
     * const [variant] = jdunpack<[MotionVariant]>(buf, "u8")
     * ```
     */
    MotionReg[MotionReg["Variant"] = 263] = "Variant";
})(MotionReg || (MotionReg = {}));
var MotionEvent;
(function (MotionEvent) {
    /**
     * A movement was detected.
     */
    MotionEvent[MotionEvent["Movement"] = 1] = "Movement";
})(MotionEvent || (MotionEvent = {}));
var MotorReg;
(function (MotorReg) {
    /**
     * Read-write ratio i1.15 (int16_t). PWM duty cycle of the motor. Use negative/positive values to run the motor forwards and backwards.
     * Positive is recommended to be clockwise rotation and negative counterclockwise. A duty of ``0``
     * while ``enabled`` acts as brake.
     *
     * ```
     * const [duty] = jdunpack<[number]>(buf, "i1.15")
     * ```
     */
    MotorReg[MotorReg["Duty"] = 2] = "Duty";
    /**
     * Read-write bool (uint8_t). Turn the power to the motor on/off.
     *
     * ```
     * const [enabled] = jdunpack<[number]>(buf, "u8")
     * ```
     */
    MotorReg[MotorReg["Enabled"] = 1] = "Enabled";
    /**
     * Constant kg/cm u16.16 (uint32_t). Torque required to produce the rated power of an electrical motor at load speed.
     *
     * ```
     * const [loadTorque] = jdunpack<[number]>(buf, "u16.16")
     * ```
     */
    MotorReg[MotorReg["LoadTorque"] = 384] = "LoadTorque";
    /**
     * Constant rpm u16.16 (uint32_t). Revolutions per minute of the motor under full load.
     *
     * ```
     * const [loadSpeed] = jdunpack<[number]>(buf, "u16.16")
     * ```
     */
    MotorReg[MotorReg["LoadSpeed"] = 385] = "LoadSpeed";
})(MotorReg || (MotorReg = {}));
var MultitouchReg;
(function (MultitouchReg) {
    /**
     * Read-only. Capacitance of channels. The capacitance is continuously calibrated, and a value of `0` indicates
     * no touch, wheres a value of around `100` or more indicates touch.
     * It's best to ignore this (unless debugging), and use events.
     *
     * ```
     * const [capacitance] = jdunpack<[number[]]>(buf, "i32[]")
     * ```
     */
    MultitouchReg[MultitouchReg["Capacity"] = 257] = "Capacity";
})(MultitouchReg || (MultitouchReg = {}));
var MultitouchEvent;
(function (MultitouchEvent) {
    /**
     * Argument: channel uint32_t. Emitted when an input is touched.
     *
     * ```
     * const [channel] = jdunpack<[number]>(buf, "u32")
     * ```
     */
    MultitouchEvent[MultitouchEvent["Touch"] = 1] = "Touch";
    /**
     * Argument: channel uint32_t. Emitted when an input is no longer touched.
     *
     * ```
     * const [channel] = jdunpack<[number]>(buf, "u32")
     * ```
     */
    MultitouchEvent[MultitouchEvent["Release"] = 2] = "Release";
    /**
     * Argument: channel uint32_t. Emitted when an input is briefly touched. TODO Not implemented.
     *
     * ```
     * const [channel] = jdunpack<[number]>(buf, "u32")
     * ```
     */
    MultitouchEvent[MultitouchEvent["Tap"] = 128] = "Tap";
    /**
     * Argument: channel uint32_t. Emitted when an input is touched for longer than 500ms. TODO Not implemented.
     *
     * ```
     * const [channel] = jdunpack<[number]>(buf, "u32")
     * ```
     */
    MultitouchEvent[MultitouchEvent["LongPress"] = 129] = "LongPress";
    /**
     * Emitted when input channels are successively touched in order of increasing channel numbers.
     */
    MultitouchEvent[MultitouchEvent["SwipePos"] = 144] = "SwipePos";
    /**
     * Emitted when input channels are successively touched in order of decreasing channel numbers.
     */
    MultitouchEvent[MultitouchEvent["SwipeNeg"] = 145] = "SwipeNeg";
})(MultitouchEvent || (MultitouchEvent = {}));
var PotentiometerVariant;
(function (PotentiometerVariant) {
    PotentiometerVariant[PotentiometerVariant["Slider"] = 1] = "Slider";
    PotentiometerVariant[PotentiometerVariant["Rotary"] = 2] = "Rotary";
})(PotentiometerVariant || (PotentiometerVariant = {}));
var PotentiometerReg;
(function (PotentiometerReg) {
    /**
     * Read-only ratio u0.16 (uint16_t). The relative position of the slider between `0` and `1`.
     *
     * ```
     * const [position] = jdunpack<[number]>(buf, "u0.16")
     * ```
     */
    PotentiometerReg[PotentiometerReg["Position"] = 257] = "Position";
    /**
     * Constant Variant (uint8_t). Specifies the physical layout of the potentiometer.
     *
     * ```
     * const [variant] = jdunpack<[PotentiometerVariant]>(buf, "u8")
     * ```
     */
    PotentiometerReg[PotentiometerReg["Variant"] = 263] = "Variant";
})(PotentiometerReg || (PotentiometerReg = {}));
var PowerPowerStatus;
(function (PowerPowerStatus) {
    PowerPowerStatus[PowerPowerStatus["Disallowed"] = 0] = "Disallowed";
    PowerPowerStatus[PowerPowerStatus["Powering"] = 1] = "Powering";
    PowerPowerStatus[PowerPowerStatus["Overload"] = 2] = "Overload";
    PowerPowerStatus[PowerPowerStatus["Overprovision"] = 3] = "Overprovision";
})(PowerPowerStatus || (PowerPowerStatus = {}));
var PowerReg;
(function (PowerReg) {
    /**
     * Read-write bool (uint8_t). Can be used to completely disable the service.
     * When allowed, the service may still not be providing power, see
     * `power_status` for the actual current state.
     *
     * ```
     * const [allowed] = jdunpack<[number]>(buf, "u8")
     * ```
     */
    PowerReg[PowerReg["Allowed"] = 1] = "Allowed";
    /**
     * Read-write mA uint16_t. Limit the power provided by the service. The actual maximum limit will depend on hardware.
     * This field may be read-only in some implementations - you should read it back after setting.
     *
     * ```
     * const [maxPower] = jdunpack<[number]>(buf, "u16")
     * ```
     */
    PowerReg[PowerReg["MaxPower"] = 7] = "MaxPower";
    /**
     * Read-only PowerStatus (uint8_t). Indicates whether the power provider is currently providing power (`Powering` state), and if not, why not.
     * `Overprovision` means there was another power provider, and we stopped not to overprovision the bus.
     *
     * ```
     * const [powerStatus] = jdunpack<[PowerPowerStatus]>(buf, "u8")
     * ```
     */
    PowerReg[PowerReg["PowerStatus"] = 385] = "PowerStatus";
    /**
     * Read-only mA uint16_t. Present current draw from the bus.
     *
     * ```
     * const [currentDraw] = jdunpack<[number]>(buf, "u16")
     * ```
     */
    PowerReg[PowerReg["CurrentDraw"] = 257] = "CurrentDraw";
    /**
     * Read-only mV uint16_t. Voltage on input.
     *
     * ```
     * const [batteryVoltage] = jdunpack<[number]>(buf, "u16")
     * ```
     */
    PowerReg[PowerReg["BatteryVoltage"] = 384] = "BatteryVoltage";
    /**
     * Read-only ratio u0.16 (uint16_t). Fraction of charge in the battery.
     *
     * ```
     * const [batteryCharge] = jdunpack<[number]>(buf, "u0.16")
     * ```
     */
    PowerReg[PowerReg["BatteryCharge"] = 386] = "BatteryCharge";
    /**
     * Constant mWh uint32_t. Energy that can be delivered to the bus when battery is fully charged.
     * This excludes conversion overheads if any.
     *
     * ```
     * const [batteryCapacity] = jdunpack<[number]>(buf, "u32")
     * ```
     */
    PowerReg[PowerReg["BatteryCapacity"] = 387] = "BatteryCapacity";
    /**
     * Read-write ms uint16_t. Many USB power packs need current to be drawn from time to time to prevent shutdown.
     * This regulates how often and for how long such current is drawn.
     * Typically a 1/8W 22 ohm resistor is used as load. This limits the duty cycle to 10%.
     *
     * ```
     * const [keepOnPulseDuration] = jdunpack<[number]>(buf, "u16")
     * ```
     */
    PowerReg[PowerReg["KeepOnPulseDuration"] = 128] = "KeepOnPulseDuration";
    /**
     * Read-write ms uint16_t. Many USB power packs need current to be drawn from time to time to prevent shutdown.
     * This regulates how often and for how long such current is drawn.
     * Typically a 1/8W 22 ohm resistor is used as load. This limits the duty cycle to 10%.
     *
     * ```
     * const [keepOnPulsePeriod] = jdunpack<[number]>(buf, "u16")
     * ```
     */
    PowerReg[PowerReg["KeepOnPulsePeriod"] = 129] = "KeepOnPulsePeriod";
})(PowerReg || (PowerReg = {}));
var PowerCmd;
(function (PowerCmd) {
    /**
     * No args. Sent by the power service periodically, as broadcast.
     */
    PowerCmd[PowerCmd["Shutdown"] = 128] = "Shutdown";
})(PowerCmd || (PowerCmd = {}));
var PowerEvent;
(function (PowerEvent) {
    /**
     * Argument: power_status PowerStatus (uint8_t). Emitted whenever `power_status` changes.
     *
     * ```
     * const [powerStatus] = jdunpack<[PowerPowerStatus]>(buf, "u8")
     * ```
     */
    PowerEvent[PowerEvent["PowerStatusChanged"] = 3] = "PowerStatusChanged";
})(PowerEvent || (PowerEvent = {}));
var PressureButtonReg;
(function (PressureButtonReg) {
    /**
     * Read-write ratio u0.16 (uint16_t). Indicates the threshold for ``up`` events.
     *
     * ```
     * const [threshold] = jdunpack<[number]>(buf, "u0.16")
     * ```
     */
    PressureButtonReg[PressureButtonReg["Threshold"] = 6] = "Threshold";
})(PressureButtonReg || (PressureButtonReg = {}));
var ProtoTestReg;
(function (ProtoTestReg) {
    /**
     * Read-write bool (uint8_t). A read write bool register.
     *
     * ```
     * const [rwBool] = jdunpack<[number]>(buf, "u8")
     * ```
     */
    ProtoTestReg[ProtoTestReg["RwBool"] = 129] = "RwBool";
    /**
     * Read-only bool (uint8_t). A read only bool register. Mirrors rw_bool.
     *
     * ```
     * const [roBool] = jdunpack<[number]>(buf, "u8")
     * ```
     */
    ProtoTestReg[ProtoTestReg["RoBool"] = 385] = "RoBool";
    /**
     * Read-write uint32_t. A read write u32 register.
     *
     * ```
     * const [rwU32] = jdunpack<[number]>(buf, "u32")
     * ```
     */
    ProtoTestReg[ProtoTestReg["RwU32"] = 130] = "RwU32";
    /**
     * Read-only uint32_t. A read only u32 register.. Mirrors rw_u32.
     *
     * ```
     * const [roU32] = jdunpack<[number]>(buf, "u32")
     * ```
     */
    ProtoTestReg[ProtoTestReg["RoU32"] = 386] = "RoU32";
    /**
     * Read-write int32_t. A read write i32 register.
     *
     * ```
     * const [rwI32] = jdunpack<[number]>(buf, "i32")
     * ```
     */
    ProtoTestReg[ProtoTestReg["RwI32"] = 131] = "RwI32";
    /**
     * Read-only int32_t. A read only i32 register.. Mirrors rw_i32.
     *
     * ```
     * const [roI32] = jdunpack<[number]>(buf, "i32")
     * ```
     */
    ProtoTestReg[ProtoTestReg["RoI32"] = 387] = "RoI32";
    /**
     * Read-write string (bytes). A read write string register.
     *
     * ```
     * const [rwString] = jdunpack<[string]>(buf, "s")
     * ```
     */
    ProtoTestReg[ProtoTestReg["RwString"] = 132] = "RwString";
    /**
     * Read-only string (bytes). A read only string register. Mirrors rw_string.
     *
     * ```
     * const [roString] = jdunpack<[string]>(buf, "s")
     * ```
     */
    ProtoTestReg[ProtoTestReg["RoString"] = 388] = "RoString";
    /**
     * Read-write bytes. A read write string register.
     *
     * ```
     * const [rwBytes] = jdunpack<[Uint8Array]>(buf, "b")
     * ```
     */
    ProtoTestReg[ProtoTestReg["RwBytes"] = 133] = "RwBytes";
    /**
     * Read-only bytes. A read only string register. Mirrors ro_bytes.
     *
     * ```
     * const [roBytes] = jdunpack<[Uint8Array]>(buf, "b")
     * ```
     */
    ProtoTestReg[ProtoTestReg["RoBytes"] = 389] = "RoBytes";
    /**
     * A read write i8, u8, u16, i32 register.
     *
     * ```
     * const [i8, u8, u16, i32] = jdunpack<[number, number, number, number]>(buf, "i8 u8 u16 i32")
     * ```
     */
    ProtoTestReg[ProtoTestReg["RwI8U8U16I32"] = 134] = "RwI8U8U16I32";
    /**
     * A read only i8, u8, u16, i32 register.. Mirrors rw_i8_u8_u16_i32.
     *
     * ```
     * const [i8, u8, u16, i32] = jdunpack<[number, number, number, number]>(buf, "i8 u8 u16 i32")
     * ```
     */
    ProtoTestReg[ProtoTestReg["RoI8U8U16I32"] = 390] = "RoI8U8U16I32";
    /**
     * A read write u8, string register.
     *
     * ```
     * const [u8, string] = jdunpack<[number, string]>(buf, "u8 s")
     * ```
     */
    ProtoTestReg[ProtoTestReg["RwU8String"] = 135] = "RwU8String";
    /**
     * A read only u8, string register.. Mirrors rw_u8_string.
     *
     * ```
     * const [u8, string] = jdunpack<[number, string]>(buf, "u8 s")
     * ```
     */
    ProtoTestReg[ProtoTestReg["RoU8String"] = 391] = "RoU8String";
})(ProtoTestReg || (ProtoTestReg = {}));
var ProtoTestEvent;
(function (ProtoTestEvent) {
    /**
     * Argument: bool bool (uint8_t). An event raised when rw_bool is modified
     *
     * ```
     * const [bool] = jdunpack<[number]>(buf, "u8")
     * ```
     */
    ProtoTestEvent[ProtoTestEvent["EBool"] = 129] = "EBool";
    /**
     * Argument: u32 uint32_t. An event raised when rw_u32 is modified
     *
     * ```
     * const [u32] = jdunpack<[number]>(buf, "u32")
     * ```
     */
    ProtoTestEvent[ProtoTestEvent["EU32"] = 130] = "EU32";
    /**
     * Argument: i32 int32_t. An event raised when rw_i32 is modified
     *
     * ```
     * const [i32] = jdunpack<[number]>(buf, "i32")
     * ```
     */
    ProtoTestEvent[ProtoTestEvent["EI32"] = 131] = "EI32";
    /**
     * Argument: string string (bytes). An event raised when rw_string is modified
     *
     * ```
     * const [string] = jdunpack<[string]>(buf, "s")
     * ```
     */
    ProtoTestEvent[ProtoTestEvent["EString"] = 132] = "EString";
    /**
     * Argument: bytes bytes. An event raised when rw_bytes is modified
     *
     * ```
     * const [bytes] = jdunpack<[Uint8Array]>(buf, "b")
     * ```
     */
    ProtoTestEvent[ProtoTestEvent["EBytes"] = 133] = "EBytes";
    /**
     * An event raised when rw_i8_u8_u16_i32 is modified
     *
     * ```
     * const [i8, u8, u16, i32] = jdunpack<[number, number, number, number]>(buf, "i8 u8 u16 i32")
     * ```
     */
    ProtoTestEvent[ProtoTestEvent["EI8U8U16I32"] = 134] = "EI8U8U16I32";
    /**
     * An event raised when rw_u8_string is modified
     *
     * ```
     * const [u8, string] = jdunpack<[number, string]>(buf, "u8 s")
     * ```
     */
    ProtoTestEvent[ProtoTestEvent["EU8String"] = 135] = "EU8String";
})(ProtoTestEvent || (ProtoTestEvent = {}));
var ProtoTestCmd;
(function (ProtoTestCmd) {
    /**
     * Argument: bool bool (uint8_t). A command to set rw_bool.
     *
     * ```
     * const [bool] = jdunpack<[number]>(buf, "u8")
     * ```
     */
    ProtoTestCmd[ProtoTestCmd["CBool"] = 129] = "CBool";
    /**
     * Argument: u32 uint32_t. A command to set rw_u32.
     *
     * ```
     * const [u32] = jdunpack<[number]>(buf, "u32")
     * ```
     */
    ProtoTestCmd[ProtoTestCmd["CU32"] = 130] = "CU32";
    /**
     * Argument: i32 int32_t. A command to set rw_i32.
     *
     * ```
     * const [i32] = jdunpack<[number]>(buf, "i32")
     * ```
     */
    ProtoTestCmd[ProtoTestCmd["CI32"] = 131] = "CI32";
    /**
     * Argument: string string (bytes). A command to set rw_string.
     *
     * ```
     * const [string] = jdunpack<[string]>(buf, "s")
     * ```
     */
    ProtoTestCmd[ProtoTestCmd["CString"] = 132] = "CString";
    /**
     * Argument: bytes bytes. A command to set rw_string.
     *
     * ```
     * const [bytes] = jdunpack<[Uint8Array]>(buf, "b")
     * ```
     */
    ProtoTestCmd[ProtoTestCmd["CBytes"] = 133] = "CBytes";
    /**
     * A command to set rw_bytes.
     *
     * ```
     * const [i8, u8, u16, i32] = jdunpack<[number, number, number, number]>(buf, "i8 u8 u16 i32")
     * ```
     */
    ProtoTestCmd[ProtoTestCmd["CI8U8U16I32"] = 134] = "CI8U8U16I32";
    /**
     * A command to set rw_u8_string.
     *
     * ```
     * const [u8, string] = jdunpack<[number, string]>(buf, "u8 s")
     * ```
     */
    ProtoTestCmd[ProtoTestCmd["CU8String"] = 135] = "CU8String";
    /**
     * Argument: p_bytes pipe (bytes). A command to read the content of rw_bytes, byte per byte, as a pipe.
     *
     * ```
     * const [pBytes] = jdunpack<[Uint8Array]>(buf, "b[12]")
     * ```
     */
    ProtoTestCmd[ProtoTestCmd["CReportPipe"] = 144] = "CReportPipe";
})(ProtoTestCmd || (ProtoTestCmd = {}));
var PulseOximeterReg;
(function (PulseOximeterReg) {
    /**
     * Read-only % u8.8 (uint16_t). The estimated oxygen level in blood.
     *
     * ```
     * const [oxygen] = jdunpack<[number]>(buf, "u8.8")
     * ```
     */
    PulseOximeterReg[PulseOximeterReg["Oxygen"] = 257] = "Oxygen";
    /**
     * Read-only % u8.8 (uint16_t). The estimated error on the reported sensor data.
     *
     * ```
     * const [oxygenError] = jdunpack<[number]>(buf, "u8.8")
     * ```
     */
    PulseOximeterReg[PulseOximeterReg["OxygenError"] = 262] = "OxygenError";
})(PulseOximeterReg || (PulseOximeterReg = {}));
var RainGaugeReg;
(function (RainGaugeReg) {
    /**
     * Read-only mm u16.16 (uint32_t). Total precipitation recorded so far.
     *
     * ```
     * const [precipitation] = jdunpack<[number]>(buf, "u16.16")
     * ```
     */
    RainGaugeReg[RainGaugeReg["Precipitation"] = 257] = "Precipitation";
    /**
     * Constant mm u16.16 (uint32_t). Typically the amount of rain needed for tipping the bucket.
     *
     * ```
     * const [precipitationPrecision] = jdunpack<[number]>(buf, "u16.16")
     * ```
     */
    RainGaugeReg[RainGaugeReg["PrecipitationPrecision"] = 264] = "PrecipitationPrecision";
})(RainGaugeReg || (RainGaugeReg = {}));
var RealTimeClockVariant;
(function (RealTimeClockVariant) {
    RealTimeClockVariant[RealTimeClockVariant["Computer"] = 1] = "Computer";
    RealTimeClockVariant[RealTimeClockVariant["Crystal"] = 2] = "Crystal";
    RealTimeClockVariant[RealTimeClockVariant["Cuckoo"] = 3] = "Cuckoo";
})(RealTimeClockVariant || (RealTimeClockVariant = {}));
var RealTimeClockReg;
(function (RealTimeClockReg) {
    /**
     * Current time in 24h representation.
     * * ``day_of_month`` is day of the month, starting at ``1``
     * * ``day_of_week`` is day of the week, starting at ``1`` as monday
     * Default streaming period is 1 second.
     *
     * ```
     * const [year, month, dayOfMonth, dayOfWeek, hour, min, sec] = jdunpack<[number, number, number, number, number, number, number]>(buf, "u16 u8 u8 u8 u8 u8 u8")
     * ```
     */
    RealTimeClockReg[RealTimeClockReg["LocalTime"] = 257] = "LocalTime";
    /**
     * Read-only s u16.16 (uint32_t). Time drift since the last call to the ``set_time`` command.
     *
     * ```
     * const [error] = jdunpack<[number]>(buf, "u16.16")
     * ```
     */
    RealTimeClockReg[RealTimeClockReg["Error"] = 384] = "Error";
    /**
     * Constant ppm u16.16 (uint32_t). Error on the clock, in parts per million of seconds.
     *
     * ```
     * const [precision] = jdunpack<[number]>(buf, "u16.16")
     * ```
     */
    RealTimeClockReg[RealTimeClockReg["Precision"] = 385] = "Precision";
    /**
     * Constant Variant (uint8_t). The type of physical clock used by the sensor.
     *
     * ```
     * const [variant] = jdunpack<[RealTimeClockVariant]>(buf, "u8")
     * ```
     */
    RealTimeClockReg[RealTimeClockReg["Variant"] = 263] = "Variant";
})(RealTimeClockReg || (RealTimeClockReg = {}));
var RealTimeClockCmd;
(function (RealTimeClockCmd) {
    /**
     * Sets the current time and resets the error.
     *
     * ```
     * const [year, month, dayOfMonth, dayOfWeek, hour, min, sec] = jdunpack<[number, number, number, number, number, number, number]>(buf, "u16 u8 u8 u8 u8 u8 u8")
     * ```
     */
    RealTimeClockCmd[RealTimeClockCmd["SetTime"] = 128] = "SetTime";
})(RealTimeClockCmd || (RealTimeClockCmd = {}));
var ReflectedLightVariant;
(function (ReflectedLightVariant) {
    ReflectedLightVariant[ReflectedLightVariant["InfraredDigital"] = 1] = "InfraredDigital";
    ReflectedLightVariant[ReflectedLightVariant["InfraredAnalog"] = 2] = "InfraredAnalog";
})(ReflectedLightVariant || (ReflectedLightVariant = {}));
var ReflectedLightReg;
(function (ReflectedLightReg) {
    /**
     * Read-only ratio u0.16 (uint16_t). Reports the reflected brightness. It may be a digital value or, for some sensor, analog value.
     *
     * ```
     * const [brightness] = jdunpack<[number]>(buf, "u0.16")
     * ```
     */
    ReflectedLightReg[ReflectedLightReg["Brightness"] = 257] = "Brightness";
    /**
     * Constant Variant (uint8_t). Type of physical sensor used
     *
     * ```
     * const [variant] = jdunpack<[ReflectedLightVariant]>(buf, "u8")
     * ```
     */
    ReflectedLightReg[ReflectedLightReg["Variant"] = 263] = "Variant";
})(ReflectedLightReg || (ReflectedLightReg = {}));
var ReflectedLightEvent;
(function (ReflectedLightEvent) {
    /**
     * The sensor detected a transition from light to dark
     */
    ReflectedLightEvent[ReflectedLightEvent["Dark"] = 2] = "Dark";
    /**
     * The sensor detected a transition from dark to light
     */
    ReflectedLightEvent[ReflectedLightEvent["Light"] = 1] = "Light";
})(ReflectedLightEvent || (ReflectedLightEvent = {}));
var RelayVariant;
(function (RelayVariant) {
    RelayVariant[RelayVariant["Electromechanical"] = 1] = "Electromechanical";
    RelayVariant[RelayVariant["SolidState"] = 2] = "SolidState";
    RelayVariant[RelayVariant["Reed"] = 3] = "Reed";
})(RelayVariant || (RelayVariant = {}));
var RelayReg;
(function (RelayReg) {
    /**
     * Read-write bool (uint8_t). Indicates whether the relay circuit is currently on (closed) or off (closed).
     *
     * ```
     * const [closed] = jdunpack<[number]>(buf, "u8")
     * ```
     */
    RelayReg[RelayReg["Closed"] = 1] = "Closed";
    /**
     * Constant Variant (uint8_t). Describes the type of relay used.
     *
     * ```
     * const [variant] = jdunpack<[RelayVariant]>(buf, "u8")
     * ```
     */
    RelayReg[RelayReg["Variant"] = 263] = "Variant";
    /**
     * Constant mA uint32_t. Maximum switching current for a resistive load.
     *
     * ```
     * const [maxSwitchingCurrent] = jdunpack<[number]>(buf, "u32")
     * ```
     */
    RelayReg[RelayReg["MaxSwitchingCurrent"] = 384] = "MaxSwitchingCurrent";
})(RelayReg || (RelayReg = {}));
var RelayEvent;
(function (RelayEvent) {
    /**
     * Emitted when relay goes from ``off`` to ``on`` state.
     */
    RelayEvent[RelayEvent["On"] = 1] = "On";
    /**
     * Emitted when relay goes from ``on`` to ``off`` state.
     */
    RelayEvent[RelayEvent["Off"] = 2] = "Off";
})(RelayEvent || (RelayEvent = {}));
var RngVariant;
(function (RngVariant) {
    RngVariant[RngVariant["Quantum"] = 1] = "Quantum";
    RngVariant[RngVariant["ADCNoise"] = 2] = "ADCNoise";
    RngVariant[RngVariant["WebCrypto"] = 3] = "WebCrypto";
})(RngVariant || (RngVariant = {}));
var RngReg;
(function (RngReg) {
    /**
     * Read-only bytes. A register that returns a 64 bytes random buffer on every request.
     * This never blocks for a long time. If you need additional random bytes, keep querying the register.
     *
     * ```
     * const [random] = jdunpack<[Uint8Array]>(buf, "b")
     * ```
     */
    RngReg[RngReg["Random"] = 384] = "Random";
    /**
     * Constant Variant (uint8_t). The type of algorithm/technique used to generate the number.
     * `Quantum` refers to dedicated hardware device generating random noise due to quantum effects.
     * `ADCNoise` is the noise from quick readings of analog-digital converter, which reads temperature of the MCU or some floating pin.
     * `WebCrypto` refers is used in simulators, where the source of randomness comes from an advanced operating system.
     *
     * ```
     * const [variant] = jdunpack<[RngVariant]>(buf, "u8")
     * ```
     */
    RngReg[RngReg["Variant"] = 263] = "Variant";
})(RngReg || (RngReg = {}));
var RoleManagerReg;
(function (RoleManagerReg) {
    /**
     * Read-write bool (uint8_t). Normally, if some roles are unfilled, and there are idle services that can fulfill them,
     * the brain device will assign roles (bind) automatically.
     * Such automatic assignment happens every second or so, and is trying to be smart about
     * co-locating roles that share "host" (part before first slash),
     * as well as reasonably stable assignments.
     * Once user start assigning roles manually using this service, auto-binding should be disabled to avoid confusion.
     *
     * ```
     * const [autoBind] = jdunpack<[number]>(buf, "u8")
     * ```
     */
    RoleManagerReg[RoleManagerReg["AutoBind"] = 128] = "AutoBind";
    /**
     * Read-only bool (uint8_t). Indicates if all required roles have been allocated to devices.
     *
     * ```
     * const [allRolesAllocated] = jdunpack<[number]>(buf, "u8")
     * ```
     */
    RoleManagerReg[RoleManagerReg["AllRolesAllocated"] = 385] = "AllRolesAllocated";
})(RoleManagerReg || (RoleManagerReg = {}));
var RoleManagerCmd;
(function (RoleManagerCmd) {
    /**
     * Get the role corresponding to given device identifer. Returns empty string if unset.
     *
     * ```
     * const [deviceId, serviceIdx] = jdunpack<[Uint8Array, number]>(buf, "b[8] u8")
     * ```
     */
    RoleManagerCmd[RoleManagerCmd["GetRole"] = 128] = "GetRole";
    /**
     * report GetRole
     * ```
     * const [deviceId, serviceIdx, role] = jdunpack<[Uint8Array, number, string]>(buf, "b[8] u8 s")
     * ```
     */
    /**
     * Set role. Can set to empty to remove role binding.
     *
     * ```
     * const [deviceId, serviceIdx, role] = jdunpack<[Uint8Array, number, string]>(buf, "b[8] u8 s")
     * ```
     */
    RoleManagerCmd[RoleManagerCmd["SetRole"] = 129] = "SetRole";
    /**
     * No args. Remove all role bindings.
     */
    RoleManagerCmd[RoleManagerCmd["ClearAllRoles"] = 132] = "ClearAllRoles";
    /**
     * Argument: stored_roles pipe (bytes). Return all roles stored internally.
     *
     * ```
     * const [storedRoles] = jdunpack<[Uint8Array]>(buf, "b[12]")
     * ```
     */
    RoleManagerCmd[RoleManagerCmd["ListStoredRoles"] = 130] = "ListStoredRoles";
    /**
     * Argument: required_roles pipe (bytes). List all roles required by the current program. `device_id` and `service_idx` are `0` if role is unbound.
     *
     * ```
     * const [requiredRoles] = jdunpack<[Uint8Array]>(buf, "b[12]")
     * ```
     */
    RoleManagerCmd[RoleManagerCmd["ListRequiredRoles"] = 131] = "ListRequiredRoles";
})(RoleManagerCmd || (RoleManagerCmd = {}));
/**
 * pipe_report StoredRoles
 * ```
 * const [deviceId, serviceIdx, role] = jdunpack<[Uint8Array, number, string]>(buf, "b[8] u8 s")
 * ```
 */
/**
 * pipe_report RequiredRoles
 * ```
 * const [deviceId, serviceClass, serviceIdx, role] = jdunpack<[Uint8Array, number, number, string]>(buf, "b[8] u32 u8 s")
 * ```
 */
var RoleManagerEvent;
(function (RoleManagerEvent) {
    /**
     * Emit notifying that the internal state of the service changed.
     */
    RoleManagerEvent[RoleManagerEvent["Change"] = 3] = "Change";
})(RoleManagerEvent || (RoleManagerEvent = {}));
var RotaryEncoderReg;
(function (RotaryEncoderReg) {
    /**
     * Read-only # int32_t. Upon device reset starts at `0` (regardless of the shaft position).
     * Increases by `1` for a clockwise "click", by `-1` for counter-clockwise.
     *
     * ```
     * const [position] = jdunpack<[number]>(buf, "i32")
     * ```
     */
    RotaryEncoderReg[RotaryEncoderReg["Position"] = 257] = "Position";
    /**
     * Constant # uint16_t. This specifies by how much `position` changes when the crank does 360 degree turn. Typically 12 or 24.
     *
     * ```
     * const [clicksPerTurn] = jdunpack<[number]>(buf, "u16")
     * ```
     */
    RotaryEncoderReg[RotaryEncoderReg["ClicksPerTurn"] = 384] = "ClicksPerTurn";
})(RotaryEncoderReg || (RotaryEncoderReg = {}));
var RoverReg;
(function (RoverReg) {
    /**
     * The current position and orientation of the robot.
     *
     * ```
     * const [x, y, vx, vy, heading] = jdunpack<[number, number, number, number, number]>(buf, "i16.16 i16.16 i16.16 i16.16 i16.16")
     * ```
     */
    RoverReg[RoverReg["Kinematics"] = 257] = "Kinematics";
})(RoverReg || (RoverReg = {}));
var SensorAggregatorSampleType;
(function (SensorAggregatorSampleType) {
    SensorAggregatorSampleType[SensorAggregatorSampleType["U8"] = 8] = "U8";
    SensorAggregatorSampleType[SensorAggregatorSampleType["I8"] = 136] = "I8";
    SensorAggregatorSampleType[SensorAggregatorSampleType["U16"] = 16] = "U16";
    SensorAggregatorSampleType[SensorAggregatorSampleType["I16"] = 144] = "I16";
    SensorAggregatorSampleType[SensorAggregatorSampleType["U32"] = 32] = "U32";
    SensorAggregatorSampleType[SensorAggregatorSampleType["I32"] = 160] = "I32";
})(SensorAggregatorSampleType || (SensorAggregatorSampleType = {}));
var SensorAggregatorReg;
(function (SensorAggregatorReg) {
    /**
     * Set automatic input collection.
     * These settings are stored in flash.
     *
     * ```
     * const [samplingInterval, samplesInWindow, rest] = jdunpack<[number, number, ([Uint8Array, number, number, number, SensorAggregatorSampleType, number])[]]>(buf, "u16 u16 x[4] r: b[8] u32 u8 u8 u8 i8")
     * const [deviceId, serviceClass, serviceNum, sampleSize, sampleType, sampleShift] = rest[0]
     * ```
     */
    SensorAggregatorReg[SensorAggregatorReg["Inputs"] = 128] = "Inputs";
    /**
     * Read-only uint32_t. Number of input samples collected so far.
     *
     * ```
     * const [numSamples] = jdunpack<[number]>(buf, "u32")
     * ```
     */
    SensorAggregatorReg[SensorAggregatorReg["NumSamples"] = 384] = "NumSamples";
    /**
     * Read-only B uint8_t. Size of a single sample.
     *
     * ```
     * const [sampleSize] = jdunpack<[number]>(buf, "u8")
     * ```
     */
    SensorAggregatorReg[SensorAggregatorReg["SampleSize"] = 385] = "SampleSize";
    /**
     * Read-write # uint32_t. When set to `N`, will stream `N` samples as `current_sample` reading.
     *
     * ```
     * const [streamingSamples] = jdunpack<[number]>(buf, "u32")
     * ```
     */
    SensorAggregatorReg[SensorAggregatorReg["StreamingSamples"] = 129] = "StreamingSamples";
    /**
     * Read-only bytes. Last collected sample.
     *
     * ```
     * const [currentSample] = jdunpack<[Uint8Array]>(buf, "b")
     * ```
     */
    SensorAggregatorReg[SensorAggregatorReg["CurrentSample"] = 257] = "CurrentSample";
})(SensorAggregatorReg || (SensorAggregatorReg = {}));
var ServoReg;
(function (ServoReg) {
    /**
     * Read-write ° i16.16 (int32_t). Specifies the angle of the arm (request).
     *
     * ```
     * const [angle] = jdunpack<[number]>(buf, "i16.16")
     * ```
     */
    ServoReg[ServoReg["Angle"] = 2] = "Angle";
    /**
     * Read-write bool (uint8_t). Turn the power to the servo on/off.
     *
     * ```
     * const [enabled] = jdunpack<[number]>(buf, "u8")
     * ```
     */
    ServoReg[ServoReg["Enabled"] = 1] = "Enabled";
    /**
     * Read-write ° i16.16 (int32_t). Correction applied to the angle to account for the servo arm drift.
     *
     * ```
     * const [offset] = jdunpack<[number]>(buf, "i16.16")
     * ```
     */
    ServoReg[ServoReg["Offset"] = 129] = "Offset";
    /**
     * Constant ° i16.16 (int32_t). Lowest angle that can be set.
     *
     * ```
     * const [minAngle] = jdunpack<[number]>(buf, "i16.16")
     * ```
     */
    ServoReg[ServoReg["MinAngle"] = 272] = "MinAngle";
    /**
     * Read-write μs uint16_t. The length of pulse corresponding to lowest angle.
     *
     * ```
     * const [minPulse] = jdunpack<[number]>(buf, "u16")
     * ```
     */
    ServoReg[ServoReg["MinPulse"] = 131] = "MinPulse";
    /**
     * Constant ° i16.16 (int32_t). Highest angle that can be set.
     *
     * ```
     * const [maxAngle] = jdunpack<[number]>(buf, "i16.16")
     * ```
     */
    ServoReg[ServoReg["MaxAngle"] = 273] = "MaxAngle";
    /**
     * Read-write μs uint16_t. The length of pulse corresponding to highest angle.
     *
     * ```
     * const [maxPulse] = jdunpack<[number]>(buf, "u16")
     * ```
     */
    ServoReg[ServoReg["MaxPulse"] = 133] = "MaxPulse";
    /**
     * Constant kg/cm u16.16 (uint32_t). The servo motor will stop rotating when it is trying to move a ``stall_torque`` weight at a radial distance of ``1.0`` cm.
     *
     * ```
     * const [stallTorque] = jdunpack<[number]>(buf, "u16.16")
     * ```
     */
    ServoReg[ServoReg["StallTorque"] = 384] = "StallTorque";
    /**
     * Constant s/60° u16.16 (uint32_t). Time to move 60°.
     *
     * ```
     * const [responseSpeed] = jdunpack<[number]>(buf, "u16.16")
     * ```
     */
    ServoReg[ServoReg["ResponseSpeed"] = 385] = "ResponseSpeed";
    /**
     * Read-only ° i16.16 (int32_t). The current physical position of the arm.
     *
     * ```
     * const [currentAngle] = jdunpack<[number]>(buf, "i16.16")
     * ```
     */
    ServoReg[ServoReg["CurrentAngle"] = 257] = "CurrentAngle";
})(ServoReg || (ServoReg = {}));
var SettingsCmd;
(function (SettingsCmd) {
    /**
     * Argument: key string (bytes). Get the value of given setting. If no such entry exists, the value returned is empty.
     *
     * ```
     * const [key] = jdunpack<[string]>(buf, "s")
     * ```
     */
    SettingsCmd[SettingsCmd["Get"] = 128] = "Get";
    /**
     * report Get
     * ```
     * const [key, value] = jdunpack<[string, Uint8Array]>(buf, "z b")
     * ```
     */
    /**
     * Set the value of a given setting.
     *
     * ```
     * const [key, value] = jdunpack<[string, Uint8Array]>(buf, "z b")
     * ```
     */
    SettingsCmd[SettingsCmd["Set"] = 129] = "Set";
    /**
     * Argument: key string (bytes). Delete a given setting.
     *
     * ```
     * const [key] = jdunpack<[string]>(buf, "s")
     * ```
     */
    SettingsCmd[SettingsCmd["Delete"] = 132] = "Delete";
    /**
     * Argument: results pipe (bytes). Return keys of all settings.
     *
     * ```
     * const [results] = jdunpack<[Uint8Array]>(buf, "b[12]")
     * ```
     */
    SettingsCmd[SettingsCmd["ListKeys"] = 130] = "ListKeys";
    /**
     * Argument: results pipe (bytes). Return keys and values of all settings.
     *
     * ```
     * const [results] = jdunpack<[Uint8Array]>(buf, "b[12]")
     * ```
     */
    SettingsCmd[SettingsCmd["List"] = 131] = "List";
    /**
     * No args. Clears all keys.
     */
    SettingsCmd[SettingsCmd["Clear"] = 133] = "Clear";
})(SettingsCmd || (SettingsCmd = {}));
/**
 * pipe_report ListedKey
 * ```
 * const [key] = jdunpack<[string]>(buf, "s")
 * ```
 */
/**
 * pipe_report ListedEntry
 * ```
 * const [key, value] = jdunpack<[string, Uint8Array]>(buf, "z b")
 * ```
 */
var SettingsEvent;
(function (SettingsEvent) {
    /**
     * Notifies that some setting have been modified.
     */
    SettingsEvent[SettingsEvent["Change"] = 3] = "Change";
})(SettingsEvent || (SettingsEvent = {}));
var SevenSegmentDisplayReg;
(function (SevenSegmentDisplayReg) {
    /**
     * Read-write bytes. Each byte encodes the display status of a digit using,
     * where bit 0 encodes segment `A`, bit 1 encodes segments `B`, ..., bit 6 encodes segments `G`, and bit 7 encodes the decimal point (if present).
     * If incoming ``digits`` data is smaller than `digit_count`, the remaining digits will be cleared.
     * Thus, sending an empty ``digits`` payload clears the screen.
     *
     * ```
     * const [digits] = jdunpack<[Uint8Array]>(buf, "b")
     * ```
     */
    SevenSegmentDisplayReg[SevenSegmentDisplayReg["Digits"] = 2] = "Digits";
    /**
     * Read-write ratio u0.16 (uint16_t). Controls the brightness of the LEDs. ``0`` means off.
     *
     * ```
     * const [brightness] = jdunpack<[number]>(buf, "u0.16")
     * ```
     */
    SevenSegmentDisplayReg[SevenSegmentDisplayReg["Brightness"] = 1] = "Brightness";
    /**
     * Read-write bool (uint8_t). Turn on or off the column LEDs (separating minutes from hours, etc.) in of the segment.
     * If the column LEDs is not supported, the value remains false.
     *
     * ```
     * const [doubleDots] = jdunpack<[number]>(buf, "u8")
     * ```
     */
    SevenSegmentDisplayReg[SevenSegmentDisplayReg["DoubleDots"] = 128] = "DoubleDots";
    /**
     * Constant uint8_t. The number of digits available on the display.
     *
     * ```
     * const [digitCount] = jdunpack<[number]>(buf, "u8")
     * ```
     */
    SevenSegmentDisplayReg[SevenSegmentDisplayReg["DigitCount"] = 384] = "DigitCount";
    /**
     * Constant bool (uint8_t). True if decimal points are available (on all digits).
     *
     * ```
     * const [decimalPoint] = jdunpack<[number]>(buf, "u8")
     * ```
     */
    SevenSegmentDisplayReg[SevenSegmentDisplayReg["DecimalPoint"] = 385] = "DecimalPoint";
})(SevenSegmentDisplayReg || (SevenSegmentDisplayReg = {}));
var SevenSegmentDisplayCmd;
(function (SevenSegmentDisplayCmd) {
    /**
     * Argument: value f64 (uint64_t). Shows the number on the screen using the decimal dot if available.
     */
    SevenSegmentDisplayCmd[SevenSegmentDisplayCmd["SetNumber"] = 128] = "SetNumber";
    /**
     * Argument: text string (bytes). Shows the text on the screen. The client may decide to scroll the text if too long.
     */
    SevenSegmentDisplayCmd[SevenSegmentDisplayCmd["SetText"] = 129] = "SetText";
})(SevenSegmentDisplayCmd || (SevenSegmentDisplayCmd = {}));
var SoilMoistureVariant;
(function (SoilMoistureVariant) {
    SoilMoistureVariant[SoilMoistureVariant["Resistive"] = 1] = "Resistive";
    SoilMoistureVariant[SoilMoistureVariant["Capacitive"] = 2] = "Capacitive";
})(SoilMoistureVariant || (SoilMoistureVariant = {}));
var SoilMoistureReg;
(function (SoilMoistureReg) {
    /**
     * Read-only ratio u0.16 (uint16_t). Indicates the wetness of the soil, from ``dry`` to ``wet``.
     *
     * ```
     * const [moisture] = jdunpack<[number]>(buf, "u0.16")
     * ```
     */
    SoilMoistureReg[SoilMoistureReg["Moisture"] = 257] = "Moisture";
    /**
     * Constant Variant (uint8_t). Describe the type of physical sensor.
     *
     * ```
     * const [variant] = jdunpack<[SoilMoistureVariant]>(buf, "u8")
     * ```
     */
    SoilMoistureReg[SoilMoistureReg["Variant"] = 263] = "Variant";
})(SoilMoistureReg || (SoilMoistureReg = {}));
var SolenoidVariant;
(function (SolenoidVariant) {
    SolenoidVariant[SolenoidVariant["PushPull"] = 1] = "PushPull";
    SolenoidVariant[SolenoidVariant["Valve"] = 2] = "Valve";
    SolenoidVariant[SolenoidVariant["Latch"] = 3] = "Latch";
})(SolenoidVariant || (SolenoidVariant = {}));
var SolenoidReg;
(function (SolenoidReg) {
    /**
     * Read-write bool (uint8_t). Indicates whether the solenoid is energized and pulled (on) or pushed (off).
     *
     * ```
     * const [pulled] = jdunpack<[number]>(buf, "u8")
     * ```
     */
    SolenoidReg[SolenoidReg["Pulled"] = 1] = "Pulled";
    /**
     * Constant Variant (uint8_t). Describes the type of solenoid used.
     *
     * ```
     * const [variant] = jdunpack<[SolenoidVariant]>(buf, "u8")
     * ```
     */
    SolenoidReg[SolenoidReg["Variant"] = 263] = "Variant";
})(SolenoidReg || (SolenoidReg = {}));
var SoundLevelReg;
(function (SoundLevelReg) {
    /**
     * Read-only ratio u0.16 (uint16_t). The sound level detected by the microphone
     *
     * ```
     * const [soundLevel] = jdunpack<[number]>(buf, "u0.16")
     * ```
     */
    SoundLevelReg[SoundLevelReg["SoundLevel"] = 257] = "SoundLevel";
    /**
     * Read-write bool (uint8_t). Turn on or off the microphone.
     *
     * ```
     * const [enabled] = jdunpack<[number]>(buf, "u8")
     * ```
     */
    SoundLevelReg[SoundLevelReg["Enabled"] = 1] = "Enabled";
    /**
     * Read-write dB int16_t. The minimum power value considered by the sensor.
     * If both ``min_decibels`` and ``max_decibels`` are supported,
     * the volume in deciment can be linearly interpolated between
     * ``[min_decibels, max_decibels]``.
     *
     * ```
     * const [minDecibels] = jdunpack<[number]>(buf, "i16")
     * ```
     */
    SoundLevelReg[SoundLevelReg["MinDecibels"] = 129] = "MinDecibels";
    /**
     * Read-write dB int16_t. The maximum power value considered by the sensor.
     * If both ``min_decibels`` and ``max_decibels`` are supported,
     * the volume in deciment can be linearly interpolated between
     * ``[min_decibels, max_decibels]``.
     *
     * ```
     * const [maxDecibels] = jdunpack<[number]>(buf, "i16")
     * ```
     */
    SoundLevelReg[SoundLevelReg["MaxDecibels"] = 130] = "MaxDecibels";
    /**
     * Read-write ratio u0.16 (uint16_t). The sound level to trigger a loud event.
     *
     * ```
     * const [loudThreshold] = jdunpack<[number]>(buf, "u0.16")
     * ```
     */
    SoundLevelReg[SoundLevelReg["LoudThreshold"] = 6] = "LoudThreshold";
    /**
     * Read-write ratio u0.16 (uint16_t). The sound level to trigger a quiet event.
     *
     * ```
     * const [quietThreshold] = jdunpack<[number]>(buf, "u0.16")
     * ```
     */
    SoundLevelReg[SoundLevelReg["QuietThreshold"] = 5] = "QuietThreshold";
})(SoundLevelReg || (SoundLevelReg = {}));
var SoundLevelEvent;
(function (SoundLevelEvent) {
    /**
     * Raised when a loud sound is detected
     */
    SoundLevelEvent[SoundLevelEvent["Loud"] = 1] = "Loud";
    /**
     * Raised when a period of quietness is detected
     */
    SoundLevelEvent[SoundLevelEvent["Quiet"] = 2] = "Quiet";
})(SoundLevelEvent || (SoundLevelEvent = {}));
var SoundPlayerReg;
(function (SoundPlayerReg) {
    /**
     * Read-write ratio u0.16 (uint16_t). Global volume of the output. ``0`` means completely off. This volume is mixed with each play volumes.
     *
     * ```
     * const [volume] = jdunpack<[number]>(buf, "u0.16")
     * ```
     */
    SoundPlayerReg[SoundPlayerReg["Volume"] = 1] = "Volume";
})(SoundPlayerReg || (SoundPlayerReg = {}));
var SoundPlayerCmd;
(function (SoundPlayerCmd) {
    /**
     * Argument: string (bytes). Starts playing a sound.
     *
     * ```
     * const [play] = jdunpack<[string]>(buf, "s")
     * ```
     */
    SoundPlayerCmd[SoundPlayerCmd["Play"] = 128] = "Play";
    /**
     * Argument: sounds_port pipe (bytes). Returns the list of sounds available to play.
     *
     * ```
     * const [soundsPort] = jdunpack<[Uint8Array]>(buf, "b[12]")
     * ```
     */
    SoundPlayerCmd[SoundPlayerCmd["ListSounds"] = 129] = "ListSounds";
})(SoundPlayerCmd || (SoundPlayerCmd = {}));
var SoundSpectrumReg;
(function (SoundSpectrumReg) {
    /**
     * Read-only bytes. The computed frequency data.
     *
     * ```
     * const [frequencyBins] = jdunpack<[Uint8Array]>(buf, "b")
     * ```
     */
    SoundSpectrumReg[SoundSpectrumReg["FrequencyBins"] = 257] = "FrequencyBins";
    /**
     * Read-write bool (uint8_t). Turns on/off the micropohone.
     *
     * ```
     * const [enabled] = jdunpack<[number]>(buf, "u8")
     * ```
     */
    SoundSpectrumReg[SoundSpectrumReg["Enabled"] = 1] = "Enabled";
    /**
     * Read-write uint8_t. The power of 2 used as the size of the FFT to be used to determine the frequency domain.
     *
     * ```
     * const [fftPow2Size] = jdunpack<[number]>(buf, "u8")
     * ```
     */
    SoundSpectrumReg[SoundSpectrumReg["FftPow2Size"] = 128] = "FftPow2Size";
    /**
     * Read-write dB int16_t. The minimum power value in the scaling range for the FFT analysis data
     *
     * ```
     * const [minDecibels] = jdunpack<[number]>(buf, "i16")
     * ```
     */
    SoundSpectrumReg[SoundSpectrumReg["MinDecibels"] = 129] = "MinDecibels";
    /**
     * Read-write dB int16_t. The maximum power value in the scaling range for the FFT analysis data
     *
     * ```
     * const [maxDecibels] = jdunpack<[number]>(buf, "i16")
     * ```
     */
    SoundSpectrumReg[SoundSpectrumReg["MaxDecibels"] = 130] = "MaxDecibels";
    /**
     * Read-write ratio u0.8 (uint8_t). The averaging constant with the last analysis frame.
     * If ``0`` is set, there is no averaging done, whereas a value of ``1`` means "overlap the previous and current buffer quite a lot while computing the value".
     *
     * ```
     * const [smoothingTimeConstant] = jdunpack<[number]>(buf, "u0.8")
     * ```
     */
    SoundSpectrumReg[SoundSpectrumReg["SmoothingTimeConstant"] = 131] = "SmoothingTimeConstant";
})(SoundSpectrumReg || (SoundSpectrumReg = {}));
var SpeechSynthesisReg;
(function (SpeechSynthesisReg) {
    /**
     * Read-write bool (uint8_t). Determines if the speech engine is in a non-paused state.
     *
     * ```
     * const [enabled] = jdunpack<[number]>(buf, "u8")
     * ```
     */
    SpeechSynthesisReg[SpeechSynthesisReg["Enabled"] = 1] = "Enabled";
    /**
     * Read-write string (bytes). Language used for utterances as defined in https://www.ietf.org/rfc/bcp/bcp47.txt.
     *
     * ```
     * const [lang] = jdunpack<[string]>(buf, "s")
     * ```
     */
    SpeechSynthesisReg[SpeechSynthesisReg["Lang"] = 128] = "Lang";
    /**
     * Read-write ratio u0.8 (uint8_t). Volume for utterances.
     *
     * ```
     * const [volume] = jdunpack<[number]>(buf, "u0.8")
     * ```
     */
    SpeechSynthesisReg[SpeechSynthesisReg["Volume"] = 129] = "Volume";
    /**
     * Read-write u16.16 (uint32_t). Pitch for utterances
     *
     * ```
     * const [pitch] = jdunpack<[number]>(buf, "u16.16")
     * ```
     */
    SpeechSynthesisReg[SpeechSynthesisReg["Pitch"] = 130] = "Pitch";
    /**
     * Read-write u16.16 (uint32_t). Rate for utterances
     *
     * ```
     * const [rate] = jdunpack<[number]>(buf, "u16.16")
     * ```
     */
    SpeechSynthesisReg[SpeechSynthesisReg["Rate"] = 131] = "Rate";
})(SpeechSynthesisReg || (SpeechSynthesisReg = {}));
var SpeechSynthesisCmd;
(function (SpeechSynthesisCmd) {
    /**
     * Argument: text string (bytes). Adds an utterance to the utterance queue; it will be spoken when any other utterances queued before it have been spoken.
     *
     * ```
     * const [text] = jdunpack<[string]>(buf, "s")
     * ```
     */
    SpeechSynthesisCmd[SpeechSynthesisCmd["Speak"] = 128] = "Speak";
    /**
     * No args. Cancels current utterance and all utterances from the utterance queue.
     */
    SpeechSynthesisCmd[SpeechSynthesisCmd["Cancel"] = 129] = "Cancel";
})(SpeechSynthesisCmd || (SpeechSynthesisCmd = {}));
var SwitchVariant;
(function (SwitchVariant) {
    SwitchVariant[SwitchVariant["Slide"] = 1] = "Slide";
    SwitchVariant[SwitchVariant["Tilt"] = 2] = "Tilt";
    SwitchVariant[SwitchVariant["PushButton"] = 3] = "PushButton";
    SwitchVariant[SwitchVariant["Tactile"] = 4] = "Tactile";
    SwitchVariant[SwitchVariant["Toggle"] = 5] = "Toggle";
    SwitchVariant[SwitchVariant["Proximity"] = 6] = "Proximity";
    SwitchVariant[SwitchVariant["Magnetic"] = 7] = "Magnetic";
    SwitchVariant[SwitchVariant["FootPedal"] = 8] = "FootPedal";
})(SwitchVariant || (SwitchVariant = {}));
var SwitchReg;
(function (SwitchReg) {
    /**
     * Read-only bool (uint8_t). Indicates whether the switch is currently active (on).
     *
     * ```
     * const [active] = jdunpack<[number]>(buf, "u8")
     * ```
     */
    SwitchReg[SwitchReg["Active"] = 257] = "Active";
    /**
     * Constant Variant (uint8_t). Describes the type of switch used.
     *
     * ```
     * const [variant] = jdunpack<[SwitchVariant]>(buf, "u8")
     * ```
     */
    SwitchReg[SwitchReg["Variant"] = 263] = "Variant";
    /**
     * Constant s u16.16 (uint32_t). Specifies the delay without activity to automatically turn off after turning on.
     * For example, some light switches in staircases have such a capability.
     *
     * ```
     * const [autoOffDelay] = jdunpack<[number]>(buf, "u16.16")
     * ```
     */
    SwitchReg[SwitchReg["AutoOffDelay"] = 384] = "AutoOffDelay";
})(SwitchReg || (SwitchReg = {}));
var SwitchEvent;
(function (SwitchEvent) {
    /**
     * Emitted when switch goes from ``off`` to ``on``.
     */
    SwitchEvent[SwitchEvent["On"] = 1] = "On";
    /**
     * Emitted when switch goes from ``on`` to ``off``.
     */
    SwitchEvent[SwitchEvent["Off"] = 2] = "Off";
})(SwitchEvent || (SwitchEvent = {}));
var TcpTcpError;
(function (TcpTcpError) {
    TcpTcpError[TcpTcpError["InvalidCommand"] = 1] = "InvalidCommand";
    TcpTcpError[TcpTcpError["InvalidCommandPayload"] = 2] = "InvalidCommandPayload";
})(TcpTcpError || (TcpTcpError = {}));
var TcpCmd;
(function (TcpCmd) {
    /**
     * Argument: inbound pipe (bytes). Open pair of pipes between network peripheral and a controlling device. In/outbound refers to direction from/to internet.
     *
     * ```
     * const [inbound] = jdunpack<[Uint8Array]>(buf, "b[12]")
     * ```
     */
    TcpCmd[TcpCmd["Open"] = 128] = "Open";
    /**
     * report Open
     * ```
     * const [outboundPort] = jdunpack<[number]>(buf, "u16")
     * ```
     */
})(TcpCmd || (TcpCmd = {}));
var TcpPipeCmd;
(function (TcpPipeCmd) {
    /**
     * Open an SSL connection to a given host:port pair. Can be issued only once on given pipe.
     * After the connection is established, an empty data report is sent.
     * Connection is closed by closing the pipe.
     *
     * ```
     * const [tcpPort, hostname] = jdunpack<[number, string]>(buf, "u16 s")
     * ```
     */
    TcpPipeCmd[TcpPipeCmd["OpenSsl"] = 1] = "OpenSsl";
    /**
     * Argument: error TcpError (int32_t). Reported when an error is encountered. Negative error codes come directly from the SSL implementation.
     *
     * ```
     * const [error] = jdunpack<[TcpTcpError]>(buf, "i32")
     * ```
     */
    TcpPipeCmd[TcpPipeCmd["Error"] = 0] = "Error";
})(TcpPipeCmd || (TcpPipeCmd = {}));
var ThermocoupleVariant;
(function (ThermocoupleVariant) {
    ThermocoupleVariant[ThermocoupleVariant["TypeK"] = 1] = "TypeK";
    ThermocoupleVariant[ThermocoupleVariant["TypeJ"] = 2] = "TypeJ";
    ThermocoupleVariant[ThermocoupleVariant["TypeT"] = 3] = "TypeT";
    ThermocoupleVariant[ThermocoupleVariant["TypeE"] = 4] = "TypeE";
    ThermocoupleVariant[ThermocoupleVariant["TypeN"] = 5] = "TypeN";
    ThermocoupleVariant[ThermocoupleVariant["TypeS"] = 6] = "TypeS";
    ThermocoupleVariant[ThermocoupleVariant["TypeR"] = 7] = "TypeR";
    ThermocoupleVariant[ThermocoupleVariant["TypeB"] = 8] = "TypeB";
})(ThermocoupleVariant || (ThermocoupleVariant = {}));
var ThermocoupleReg;
(function (ThermocoupleReg) {
    /**
     * Read-only °C i22.10 (int32_t). The temperature.
     *
     * ```
     * const [temperature] = jdunpack<[number]>(buf, "i22.10")
     * ```
     */
    ThermocoupleReg[ThermocoupleReg["Temperature"] = 257] = "Temperature";
    /**
     * Constant °C i22.10 (int32_t). Lowest temperature that can be reported.
     *
     * ```
     * const [minTemperature] = jdunpack<[number]>(buf, "i22.10")
     * ```
     */
    ThermocoupleReg[ThermocoupleReg["MinTemperature"] = 260] = "MinTemperature";
    /**
     * Constant °C i22.10 (int32_t). Highest temperature that can be reported.
     *
     * ```
     * const [maxTemperature] = jdunpack<[number]>(buf, "i22.10")
     * ```
     */
    ThermocoupleReg[ThermocoupleReg["MaxTemperature"] = 261] = "MaxTemperature";
    /**
     * Read-only °C u22.10 (uint32_t). The real temperature is between `temperature - temperature_error` and `temperature + temperature_error`.
     *
     * ```
     * const [temperatureError] = jdunpack<[number]>(buf, "u22.10")
     * ```
     */
    ThermocoupleReg[ThermocoupleReg["TemperatureError"] = 262] = "TemperatureError";
    /**
     * Constant Variant (uint8_t). Specifies the type of thermometer.
     *
     * ```
     * const [variant] = jdunpack<[ThermocoupleVariant]>(buf, "u8")
     * ```
     */
    ThermocoupleReg[ThermocoupleReg["Variant"] = 263] = "Variant";
})(ThermocoupleReg || (ThermocoupleReg = {}));
var ThermometerVariant;
(function (ThermometerVariant) {
    ThermometerVariant[ThermometerVariant["Outdoor"] = 1] = "Outdoor";
    ThermometerVariant[ThermometerVariant["Indoor"] = 2] = "Indoor";
    ThermometerVariant[ThermometerVariant["Body"] = 3] = "Body";
})(ThermometerVariant || (ThermometerVariant = {}));
var ThermometerReg;
(function (ThermometerReg) {
    /**
     * Read-only °C i22.10 (int32_t). The temperature.
     *
     * ```
     * const [temperature] = jdunpack<[number]>(buf, "i22.10")
     * ```
     */
    ThermometerReg[ThermometerReg["Temperature"] = 257] = "Temperature";
    /**
     * Constant °C i22.10 (int32_t). Lowest temperature that can be reported.
     *
     * ```
     * const [minTemperature] = jdunpack<[number]>(buf, "i22.10")
     * ```
     */
    ThermometerReg[ThermometerReg["MinTemperature"] = 260] = "MinTemperature";
    /**
     * Constant °C i22.10 (int32_t). Highest temperature that can be reported.
     *
     * ```
     * const [maxTemperature] = jdunpack<[number]>(buf, "i22.10")
     * ```
     */
    ThermometerReg[ThermometerReg["MaxTemperature"] = 261] = "MaxTemperature";
    /**
     * Read-only °C u22.10 (uint32_t). The real temperature is between `temperature - temperature_error` and `temperature + temperature_error`.
     *
     * ```
     * const [temperatureError] = jdunpack<[number]>(buf, "u22.10")
     * ```
     */
    ThermometerReg[ThermometerReg["TemperatureError"] = 262] = "TemperatureError";
    /**
     * Constant Variant (uint8_t). Specifies the type of thermometer.
     *
     * ```
     * const [variant] = jdunpack<[ThermometerVariant]>(buf, "u8")
     * ```
     */
    ThermometerReg[ThermometerReg["Variant"] = 263] = "Variant";
})(ThermometerReg || (ThermometerReg = {}));
var TrafficLightReg;
(function (TrafficLightReg) {
    /**
     * Read-write bool (uint8_t). The on/off state of the red light.
     *
     * ```
     * const [red] = jdunpack<[number]>(buf, "u8")
     * ```
     */
    TrafficLightReg[TrafficLightReg["Red"] = 128] = "Red";
    /**
     * Read-write bool (uint8_t). The on/off state of the red light.
     *
     * ```
     * const [orange] = jdunpack<[number]>(buf, "u8")
     * ```
     */
    TrafficLightReg[TrafficLightReg["Orange"] = 129] = "Orange";
    /**
     * Read-write bool (uint8_t). The on/off state of the red light.
     *
     * ```
     * const [green] = jdunpack<[number]>(buf, "u8")
     * ```
     */
    TrafficLightReg[TrafficLightReg["Green"] = 130] = "Green";
})(TrafficLightReg || (TrafficLightReg = {}));
var TvocReg;
(function (TvocReg) {
    /**
     * Read-only ppb u22.10 (uint32_t). Total volatile organic compound readings in parts per billion.
     *
     * ```
     * const [tVOC] = jdunpack<[number]>(buf, "u22.10")
     * ```
     */
    TvocReg[TvocReg["TVOC"] = 257] = "TVOC";
    /**
     * Read-only ppb u22.10 (uint32_t). Error on the reading data
     *
     * ```
     * const [tVOCError] = jdunpack<[number]>(buf, "u22.10")
     * ```
     */
    TvocReg[TvocReg["TVOCError"] = 262] = "TVOCError";
    /**
     * Constant ppb u22.10 (uint32_t). Minimum measurable value
     *
     * ```
     * const [minTVOC] = jdunpack<[number]>(buf, "u22.10")
     * ```
     */
    TvocReg[TvocReg["MinTVOC"] = 260] = "MinTVOC";
    /**
     * Constant ppb u22.10 (uint32_t). Minimum measurable value
     *
     * ```
     * const [maxTVOC] = jdunpack<[number]>(buf, "u22.10")
     * ```
     */
    TvocReg[TvocReg["MaxTVOC"] = 261] = "MaxTVOC";
    /**
     * Constant s uint32_t. Time required to achieve good sensor stability before measuring after long idle period.
     *
     * ```
     * const [conditioningPeriod] = jdunpack<[number]>(buf, "u32")
     * ```
     */
    TvocReg[TvocReg["ConditioningPeriod"] = 384] = "ConditioningPeriod";
})(TvocReg || (TvocReg = {}));
var UvIndexVariant;
(function (UvIndexVariant) {
    UvIndexVariant[UvIndexVariant["UVA_UVB"] = 1] = "UVA_UVB";
    UvIndexVariant[UvIndexVariant["Visible_IR"] = 2] = "Visible_IR";
})(UvIndexVariant || (UvIndexVariant = {}));
var UvIndexReg;
(function (UvIndexReg) {
    /**
     * Read-only uv u16.16 (uint32_t). Ultraviolet index, typically refreshed every second.
     *
     * ```
     * const [uvIndex] = jdunpack<[number]>(buf, "u16.16")
     * ```
     */
    UvIndexReg[UvIndexReg["UvIndex"] = 257] = "UvIndex";
    /**
     * Read-only uv u16.16 (uint32_t). Error on the UV measure.
     *
     * ```
     * const [uvIndexError] = jdunpack<[number]>(buf, "u16.16")
     * ```
     */
    UvIndexReg[UvIndexReg["UvIndexError"] = 262] = "UvIndexError";
    /**
     * Constant Variant (uint8_t). The type of physical sensor and capabilities.
     *
     * ```
     * const [variant] = jdunpack<[UvIndexVariant]>(buf, "u8")
     * ```
     */
    UvIndexReg[UvIndexReg["Variant"] = 263] = "Variant";
})(UvIndexReg || (UvIndexReg = {}));
var VerifiedTelemetryStatus;
(function (VerifiedTelemetryStatus) {
    VerifiedTelemetryStatus[VerifiedTelemetryStatus["Unknown"] = 0] = "Unknown";
    VerifiedTelemetryStatus[VerifiedTelemetryStatus["Working"] = 1] = "Working";
    VerifiedTelemetryStatus[VerifiedTelemetryStatus["Faulty"] = 2] = "Faulty";
})(VerifiedTelemetryStatus || (VerifiedTelemetryStatus = {}));
var VerifiedTelemetryFingerprintType;
(function (VerifiedTelemetryFingerprintType) {
    VerifiedTelemetryFingerprintType[VerifiedTelemetryFingerprintType["FallCurve"] = 1] = "FallCurve";
    VerifiedTelemetryFingerprintType[VerifiedTelemetryFingerprintType["CurrentSense"] = 2] = "CurrentSense";
    VerifiedTelemetryFingerprintType[VerifiedTelemetryFingerprintType["Custom"] = 3] = "Custom";
})(VerifiedTelemetryFingerprintType || (VerifiedTelemetryFingerprintType = {}));
var VerifiedTelemetryReg;
(function (VerifiedTelemetryReg) {
    /**
     * Read-only Status (uint8_t). Reads the telemetry working status, where ``true`` is working and ``false`` is faulty.
     *
     * ```
     * const [telemetryStatus] = jdunpack<[VerifiedTelemetryStatus]>(buf, "u8")
     * ```
     */
    VerifiedTelemetryReg[VerifiedTelemetryReg["TelemetryStatus"] = 384] = "TelemetryStatus";
    /**
     * Read-write ms uint32_t. Specifies the interval between computing the fingerprint information.
     *
     * ```
     * const [telemetryStatusInterval] = jdunpack<[number]>(buf, "u32")
     * ```
     */
    VerifiedTelemetryReg[VerifiedTelemetryReg["TelemetryStatusInterval"] = 128] = "TelemetryStatusInterval";
    /**
     * Constant FingerprintType (uint8_t). Type of the fingerprint.
     *
     * ```
     * const [fingerprintType] = jdunpack<[VerifiedTelemetryFingerprintType]>(buf, "u8")
     * ```
     */
    VerifiedTelemetryReg[VerifiedTelemetryReg["FingerprintType"] = 385] = "FingerprintType";
    /**
     * Template Fingerprint information of a working sensor.
     *
     * ```
     * const [confidence, template] = jdunpack<[number, Uint8Array]>(buf, "u16 b")
     * ```
     */
    VerifiedTelemetryReg[VerifiedTelemetryReg["FingerprintTemplate"] = 386] = "FingerprintTemplate";
})(VerifiedTelemetryReg || (VerifiedTelemetryReg = {}));
var VerifiedTelemetryCmd;
(function (VerifiedTelemetryCmd) {
    /**
     * No args. This command will clear the template fingerprint of a sensor and collect a new template fingerprint of the attached sensor.
     */
    VerifiedTelemetryCmd[VerifiedTelemetryCmd["ResetFingerprintTemplate"] = 128] = "ResetFingerprintTemplate";
    /**
     * No args. This command will append a new template fingerprint to the `fingerprintTemplate`. Appending more fingerprints will increase the accuracy in detecting the telemetry status.
     */
    VerifiedTelemetryCmd[VerifiedTelemetryCmd["RetrainFingerprintTemplate"] = 129] = "RetrainFingerprintTemplate";
})(VerifiedTelemetryCmd || (VerifiedTelemetryCmd = {}));
var VerifiedTelemetryEvent;
(function (VerifiedTelemetryEvent) {
    /**
     * Argument: telemetry_status Status (uint8_t). The telemetry status of the device was updated.
     *
     * ```
     * const [telemetryStatus] = jdunpack<[VerifiedTelemetryStatus]>(buf, "u8")
     * ```
     */
    VerifiedTelemetryEvent[VerifiedTelemetryEvent["TelemetryStatusChange"] = 3] = "TelemetryStatusChange";
    /**
     * The fingerprint template was updated
     */
    VerifiedTelemetryEvent[VerifiedTelemetryEvent["FingerprintTemplateChange"] = 128] = "FingerprintTemplateChange";
})(VerifiedTelemetryEvent || (VerifiedTelemetryEvent = {}));
var VibrationMotorReg;
(function (VibrationMotorReg) {
    /**
     * Read-write bool (uint8_t). Determines if the vibration motor responds to vibrate commands.
     *
     * ```
     * const [enabled] = jdunpack<[number]>(buf, "u8")
     * ```
     */
    VibrationMotorReg[VibrationMotorReg["Enabled"] = 1] = "Enabled";
})(VibrationMotorReg || (VibrationMotorReg = {}));
var VibrationMotorCmd;
(function (VibrationMotorCmd) {
    /**
     * Starts a sequence of vibration and pauses. To stop any existing vibration, send an empty payload.
     *
     * ```
     * const [rest] = jdunpack<[([number, number])[]]>(buf, "r: u8 u0.8")
     * const [duration, speed] = rest[0]
     * ```
     */
    VibrationMotorCmd[VibrationMotorCmd["Vibrate"] = 128] = "Vibrate";
})(VibrationMotorCmd || (VibrationMotorCmd = {}));
var WaterLevelVariant;
(function (WaterLevelVariant) {
    WaterLevelVariant[WaterLevelVariant["Resistive"] = 1] = "Resistive";
    WaterLevelVariant[WaterLevelVariant["ContactPhotoElectric"] = 2] = "ContactPhotoElectric";
    WaterLevelVariant[WaterLevelVariant["NonContactPhotoElectric"] = 3] = "NonContactPhotoElectric";
})(WaterLevelVariant || (WaterLevelVariant = {}));
var WaterLevelReg;
(function (WaterLevelReg) {
    /**
     * Read-only ratio u0.16 (uint16_t). The reported water level.
     *
     * ```
     * const [level] = jdunpack<[number]>(buf, "u0.16")
     * ```
     */
    WaterLevelReg[WaterLevelReg["Level"] = 257] = "Level";
    /**
     * Constant Variant (uint8_t). The type of physical sensor.
     *
     * ```
     * const [variant] = jdunpack<[WaterLevelVariant]>(buf, "u8")
     * ```
     */
    WaterLevelReg[WaterLevelReg["Variant"] = 263] = "Variant";
})(WaterLevelReg || (WaterLevelReg = {}));
var WeightScaleVariant;
(function (WeightScaleVariant) {
    WeightScaleVariant[WeightScaleVariant["Body"] = 1] = "Body";
    WeightScaleVariant[WeightScaleVariant["Food"] = 2] = "Food";
    WeightScaleVariant[WeightScaleVariant["Jewelry"] = 3] = "Jewelry";
})(WeightScaleVariant || (WeightScaleVariant = {}));
var WeightScaleReg;
(function (WeightScaleReg) {
    /**
     * Read-only kg u16.16 (uint32_t). The reported weight.
     *
     * ```
     * const [weight] = jdunpack<[number]>(buf, "u16.16")
     * ```
     */
    WeightScaleReg[WeightScaleReg["Weight"] = 257] = "Weight";
    /**
     * Read-only kg u16.16 (uint32_t). The estimate error on the reported reading.
     *
     * ```
     * const [weightError] = jdunpack<[number]>(buf, "u16.16")
     * ```
     */
    WeightScaleReg[WeightScaleReg["WeightError"] = 262] = "WeightError";
    /**
     * Read-write kg u16.16 (uint32_t). Calibrated zero offset error on the scale, i.e. the measured weight when nothing is on the scale.
     * You do not need to subtract that from the reading, it has already been done.
     *
     * ```
     * const [zeroOffset] = jdunpack<[number]>(buf, "u16.16")
     * ```
     */
    WeightScaleReg[WeightScaleReg["ZeroOffset"] = 128] = "ZeroOffset";
    /**
     * Read-write u16.16 (uint32_t). Calibrated gain on the weight scale error.
     *
     * ```
     * const [gain] = jdunpack<[number]>(buf, "u16.16")
     * ```
     */
    WeightScaleReg[WeightScaleReg["Gain"] = 129] = "Gain";
    /**
     * Constant kg u16.16 (uint32_t). Maximum supported weight on the scale.
     *
     * ```
     * const [maxWeight] = jdunpack<[number]>(buf, "u16.16")
     * ```
     */
    WeightScaleReg[WeightScaleReg["MaxWeight"] = 261] = "MaxWeight";
    /**
     * Constant kg u16.16 (uint32_t). Minimum recommend weight on the scale.
     *
     * ```
     * const [minWeight] = jdunpack<[number]>(buf, "u16.16")
     * ```
     */
    WeightScaleReg[WeightScaleReg["MinWeight"] = 260] = "MinWeight";
    /**
     * Constant kg u16.16 (uint32_t). Smallest, yet distinguishable change in reading.
     *
     * ```
     * const [weightResolution] = jdunpack<[number]>(buf, "u16.16")
     * ```
     */
    WeightScaleReg[WeightScaleReg["WeightResolution"] = 264] = "WeightResolution";
    /**
     * Constant Variant (uint8_t). The type of physical scale
     *
     * ```
     * const [variant] = jdunpack<[WeightScaleVariant]>(buf, "u8")
     * ```
     */
    WeightScaleReg[WeightScaleReg["Variant"] = 263] = "Variant";
})(WeightScaleReg || (WeightScaleReg = {}));
var WeightScaleCmd;
(function (WeightScaleCmd) {
    /**
     * No args. Call this command when there is nothing on the scale. If supported, the module should save the calibration data.
     */
    WeightScaleCmd[WeightScaleCmd["CalibrateZeroOffset"] = 128] = "CalibrateZeroOffset";
    /**
     * Argument: weight g u22.10 (uint32_t). Call this command with the weight of the thing on the scale.
     *
     * ```
     * const [weight] = jdunpack<[number]>(buf, "u22.10")
     * ```
     */
    WeightScaleCmd[WeightScaleCmd["CalibrateGain"] = 129] = "CalibrateGain";
})(WeightScaleCmd || (WeightScaleCmd = {}));
var WifiAPFlags;
(function (WifiAPFlags) {
    WifiAPFlags[WifiAPFlags["HasPassword"] = 1] = "HasPassword";
    WifiAPFlags[WifiAPFlags["WPS"] = 2] = "WPS";
    WifiAPFlags[WifiAPFlags["HasSecondaryChannelAbove"] = 4] = "HasSecondaryChannelAbove";
    WifiAPFlags[WifiAPFlags["HasSecondaryChannelBelow"] = 8] = "HasSecondaryChannelBelow";
    WifiAPFlags[WifiAPFlags["IEEE_802_11B"] = 256] = "IEEE_802_11B";
    WifiAPFlags[WifiAPFlags["IEEE_802_11A"] = 512] = "IEEE_802_11A";
    WifiAPFlags[WifiAPFlags["IEEE_802_11G"] = 1024] = "IEEE_802_11G";
    WifiAPFlags[WifiAPFlags["IEEE_802_11N"] = 2048] = "IEEE_802_11N";
    WifiAPFlags[WifiAPFlags["IEEE_802_11AC"] = 4096] = "IEEE_802_11AC";
    WifiAPFlags[WifiAPFlags["IEEE_802_11AX"] = 8192] = "IEEE_802_11AX";
    WifiAPFlags[WifiAPFlags["IEEE_802_LongRange"] = 32768] = "IEEE_802_LongRange";
})(WifiAPFlags || (WifiAPFlags = {}));
var WifiCmd;
(function (WifiCmd) {
    /**
     * Argument: results pipe (bytes). Initiate search for WiFi networks. Results are returned via pipe, one entry per packet.
     *
     * ```
     * const [results] = jdunpack<[Uint8Array]>(buf, "b[12]")
     * ```
     */
    WifiCmd[WifiCmd["Scan"] = 128] = "Scan";
    /**
     * Connect to named network.
     *
     * ```
     * const [ssid, password] = jdunpack<[string, string]>(buf, "z z")
     * ```
     */
    WifiCmd[WifiCmd["Connect"] = 129] = "Connect";
    /**
     * No args. Disconnect from current WiFi network if any.
     */
    WifiCmd[WifiCmd["Disconnect"] = 130] = "Disconnect";
})(WifiCmd || (WifiCmd = {}));
/**
 * pipe_report Results
 * ```
 * const [flags, rssi, channel, bssid, ssid] = jdunpack<[WifiAPFlags, number, number, Uint8Array, string]>(buf, "u32 x[4] i8 u8 b[6] s[33]")
 * ```
 */
var WifiReg;
(function (WifiReg) {
    /**
     * Read-only bool (uint8_t). Indicates whether or not we currently have an IP address assigned.
     *
     * ```
     * const [connected] = jdunpack<[number]>(buf, "u8")
     * ```
     */
    WifiReg[WifiReg["Connected"] = 384] = "Connected";
})(WifiReg || (WifiReg = {}));
var WifiEvent;
(function (WifiEvent) {
    /**
     * Emitted upon successful join and IP address assignment.
     */
    WifiEvent[WifiEvent["GotIp"] = 1] = "GotIp";
    /**
     * Emitted when disconnected from network.
     */
    WifiEvent[WifiEvent["LostIp"] = 2] = "LostIp";
})(WifiEvent || (WifiEvent = {}));
var WindDirectionReg;
(function (WindDirectionReg) {
    /**
     * Read-only ° uint16_t. The direction of the wind.
     *
     * ```
     * const [windDirection] = jdunpack<[number]>(buf, "u16")
     * ```
     */
    WindDirectionReg[WindDirectionReg["WindDirection"] = 257] = "WindDirection";
    /**
     * Read-only ° uint16_t. Error on the wind direction reading
     *
     * ```
     * const [windDirectionError] = jdunpack<[number]>(buf, "u16")
     * ```
     */
    WindDirectionReg[WindDirectionReg["WindDirectionError"] = 262] = "WindDirectionError";
})(WindDirectionReg || (WindDirectionReg = {}));
var WindSpeedReg;
(function (WindSpeedReg) {
    /**
     * Read-only m/s u16.16 (uint32_t). The velocity of the wind.
     *
     * ```
     * const [windSpeed] = jdunpack<[number]>(buf, "u16.16")
     * ```
     */
    WindSpeedReg[WindSpeedReg["WindSpeed"] = 257] = "WindSpeed";
    /**
     * Read-only m/s u16.16 (uint32_t). Error on the reading
     *
     * ```
     * const [windSpeedError] = jdunpack<[number]>(buf, "u16.16")
     * ```
     */
    WindSpeedReg[WindSpeedReg["WindSpeedError"] = 262] = "WindSpeedError";
    /**
     * Constant m/s u16.16 (uint32_t). Maximum speed that can be measured by the sensor.
     *
     * ```
     * const [maxWindSpeed] = jdunpack<[number]>(buf, "u16.16")
     * ```
     */
    WindSpeedReg[WindSpeedReg["MaxWindSpeed"] = 261] = "MaxWindSpeed";
})(WindSpeedReg || (WindSpeedReg = {}));

// Registers 0x001-0x07f - r/w common to all services
const ERROR_MICROBIT_V1 = "microbit/v1-not-supported";
const ERROR_MICROBIT_UNKNOWN = "microbit/unknown-hardware-revision";
const ERROR_MICROBIT_JACDAC_MISSING = "microbit/jacdac-missing";
const ERROR_MICROBIT_INVALID_MEMORY = "microbit/invalid-memory";
const JACDAC_ERROR = "JacdacError";

/**
 * Common Jacdac error type
 * @category Runtime
 */
class JDError extends Error {
    constructor(message, jacdacName) {
        super(message);
        this.jacdacName = jacdacName;
        this.name = JACDAC_ERROR;
    }
}
/**
 * Extract the Jacdac error code if any
 * @param e
 * @returns
 * @category Runtime
 */
function errorCode(e) {
    return e.name === JACDAC_ERROR ? e?.jacdacName : undefined;
}

/**
 * Various flags to control the runtime environment
 * @category Runtime
 */
class Flags {
}
/**
 * Enables additional logging and diagnostics
 */
Flags.diagnostics = false;
/**
 * Trace who and what generates packets
 */
Flags.trace = false;
/**
 * Enables/disabled WebUSB
 */
Flags.webUSB = true;
/**
 * Enables/disabled WebSerial
 */
Flags.webSerial = true;
/**
 * Enables/disables WebBLE
 */
Flags.webBluetooth = false;
/**
 * Use local storage and indexeddb to store data
 */
Flags.storage = false;

function throwError(msg, cancel) {
    const e = new Error(msg);
    if (cancel)
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        e.__cancel = true;
    throw e;
}
function delay(millis, value) {
    return new Promise(resolve => setTimeout(() => resolve(value), millis));
}
function memcpy(trg, trgOff, src, srcOff, len) {
    if (srcOff === void 0)
        srcOff = 0;
    if (len === void 0)
        len = src.length - srcOff;
    for (let i = 0; i < len; ++i)
        trg[trgOff + i] = src[srcOff + i];
}
function uint8ArrayToString(input) {
    const len = input.length;
    let res = "";
    for (let i = 0; i < len; ++i)
        res += String.fromCharCode(input[i]);
    return res;
}
function fromUTF8(binstr) {
    if (!binstr)
        return "";
    // escape function is deprecated
    let escaped = "";
    for (let i = 0; i < binstr.length; ++i) {
        const k = binstr.charCodeAt(i) & 0xff;
        if (k == 37 || k > 0x7f) {
            escaped += "%" + k.toString(16);
        }
        else {
            escaped += binstr.charAt(i);
        }
    }
    // decodeURIComponent does the actual UTF8 decoding
    return decodeURIComponent(escaped);
}
/** @internal */
class PromiseBuffer {
    constructor() {
        this.waiting = [];
        this.available = [];
    }
    drain() {
        for (const f of this.waiting) {
            f(new Error("Promise Buffer Reset"));
        }
        this.waiting = [];
        this.available = [];
    }
    pushError(v) {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        this.push(v);
    }
    push(v) {
        const f = this.waiting.shift();
        if (f)
            f(v);
        else
            this.available.push(v);
    }
    shiftAsync(timeout = 0) {
        if (this.available.length > 0) {
            const v = this.available.shift();
            if (v instanceof Error)
                return Promise.reject(v);
            else
                return Promise.resolve(v);
        }
        else
            return new Promise((resolve, reject) => {
                const f = (v) => {
                    if (v instanceof Error)
                        reject(v);
                    else
                        resolve(v);
                };
                this.waiting.push(f);
                if (timeout > 0) {
                    delay(timeout).then(() => {
                        const idx = this.waiting.indexOf(f);
                        if (idx >= 0) {
                            this.waiting.splice(idx, 1);
                            reject(new Error("Timeout"));
                        }
                    });
                }
            });
    }
}
/** @internal */
class PromiseQueue {
    constructor() {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        this.promises = {};
    }
    enqueue(id, f) {
        return new Promise((resolve, reject) => {
            let arr = this.promises[id];
            if (!arr) {
                arr = this.promises[id] = [];
            }
            const cleanup = () => {
                arr.shift();
                if (arr.length == 0)
                    delete this.promises[id];
                else
                    arr[0]();
            };
            arr.push(() => f().then(v => {
                cleanup();
                resolve(v);
            }, err => {
                cleanup();
                reject(err);
            }));
            if (arr.length == 1)
                arr[0]();
        });
    }
}
function fromHex(hex) {
    const r = new Uint8Array(hex.length >> 1);
    for (let i = 0; i < hex.length; i += 2)
        r[i >> 1] = parseInt(hex.slice(i, i + 2), 16);
    return r;
}
function write32(buf, pos, v) {
    buf[pos + 0] = (v >> 0) & 0xff;
    buf[pos + 1] = (v >> 8) & 0xff;
    buf[pos + 2] = (v >> 16) & 0xff;
    buf[pos + 3] = (v >> 24) & 0xff;
}
function write16(buf, pos, v) {
    buf[pos + 0] = (v >> 0) & 0xff;
    buf[pos + 1] = (v >> 8) & 0xff;
}
function read32(buf, pos) {
    return ((buf[pos] |
        (buf[pos + 1] << 8) |
        (buf[pos + 2] << 16) |
        (buf[pos + 3] << 24)) >>>
        0);
}
function read16(buf, pos) {
    return buf[pos] | (buf[pos + 1] << 8);
}
function encodeU32LE(words) {
    const r = new Uint8Array(words.length * 4);
    for (let i = 0; i < words.length; ++i)
        write32(r, i * 4, words[i]);
    return r;
}
function bufferToString(buf) {
    return fromUTF8(uint8ArrayToString(buf));
}
function bufferConcat(a, b) {
    const r = new Uint8Array(a.length + b.length);
    r.set(a, 0);
    r.set(b, a.length);
    return r;
}
function assert(cond, msg = "Assertion failed", 
// eslint-disable-next-line @typescript-eslint/no-explicit-any
debugData) {
    if (!cond) {
        if (debugData)
            console.debug(`assertion filed ${msg}`, debugData);
        if (Flags.diagnostics)
            // eslint-disable-next-line no-debugger
            debugger;
        throw new Error(msg);
    }
}

// see https://github.com/microsoft/uf2/blob/main/hf2.md for full spec
const HF2_DEVICE_MAJOR = 42;
const HF2_CMD_BININFO = 0x0001; // no arguments
const HF2_MODE_BOOTLOADER = 0x01;
const HF2_MODE_USERSPACE = 0x02;
/*
struct HF2_BININFO_Result {
    uint32_t mode;
    uint32_t flash_page_size;
    uint32_t flash_num_pages;
    uint32_t max_message_size;
};
*/
const HF2_CMD_INFO = 0x0002;
// no arguments
// results is utf8 character array
const HF2_CMD_RESET_INTO_APP = 0x0003; // no arguments, no result
// no arguments
// results is utf8 character array
const HF2_FLAG_SERIAL_OUT = 0x80;
const HF2_FLAG_SERIAL_ERR = 0xc0;
const HF2_FLAG_CMDPKT_LAST = 0x40;
const HF2_FLAG_CMDPKT_BODY = 0x00;
const HF2_FLAG_MASK = 0xc0;
const HF2_STATUS_OK = 0x00;
const HF2_STATUS_INVALID_CMD = 0x01;
const HF2_STATUS_EXEC_ERR = 0x02;
const HF2_STATUS_EVENT = 0x80;
// the eventId is overlayed on the tag+status; the mask corresponds
// to the HF2_STATUS_EVENT above
const HF2_EV_MASK = 0x800000;
const HF2_CMD_JDS_CONFIG = 0x0020;
const HF2_CMD_JDS_SEND = 0x0021;
const HF2_EV_JDS_PACKET = 0x800020;
class HF2Proto {
    constructor(io) {
        this.io = io;
        this.eventHandlers = {};
        this.msgs = new PromiseBuffer();
        this.cmdSeq = (Math.random() * 0xffff) | 0;
        this.lock = new PromiseQueue();
        let frames = [];
        io.onData = buf => {
            const tp = buf[0] & HF2_FLAG_MASK;
            const len = buf[0] & 63;
            //console.log(`msg tp=${tp} len=${len}`)
            const frame = new Uint8Array(len);
            memcpy(frame, 0, buf, 1, len);
            if (tp & HF2_FLAG_SERIAL_OUT) {
                this.onSerial(frame, tp == HF2_FLAG_SERIAL_ERR);
                return;
            }
            frames.push(frame);
            if (tp == HF2_FLAG_CMDPKT_BODY) {
                return;
            }
            else {
                assert(tp == HF2_FLAG_CMDPKT_LAST);
                let total = 0;
                for (const f of frames)
                    total += f.length;
                const r = new Uint8Array(total);
                let ptr = 0;
                for (const f of frames) {
                    memcpy(r, ptr, f);
                    ptr += f.length;
                }
                frames = [];
                if (r[2] & HF2_STATUS_EVENT) {
                    // asynchronous event
                    this.handleEvent(r);
                }
                else {
                    this.msgs.push(r);
                }
            }
        };
    }
    error(m) {
        return this.io.error(m);
    }
    talkAsync(cmd, data) {
        if (!this.io)
            console.log("rogue hf2 instance");
        let len = 8;
        if (data)
            len += data.length;
        const pkt = new Uint8Array(len);
        const seq = ++this.cmdSeq & 0xffff;
        write32(pkt, 0, cmd);
        write16(pkt, 4, seq);
        write16(pkt, 6, 0);
        if (data)
            memcpy(pkt, 8, data, 0, data.length);
        let numSkipped = 0;
        const handleReturnAsync = () => this.msgs
            .shiftAsync(1000) // we wait up to a second
            .then(res => {
            if (read16(res, 0) != seq) {
                if (numSkipped < 3) {
                    numSkipped++;
                    this.io.log(`message out of sync, (${seq} vs ${read16(res, 0)}); will re-try`);
                    return handleReturnAsync();
                }
                this.error("out of sync");
            }
            let info = "";
            if (res[3])
                info = "; info=" + res[3];
            switch (res[2]) {
                case HF2_STATUS_OK:
                    return res.slice(4);
                case HF2_STATUS_INVALID_CMD:
                    this.error("invalid command" + info);
                    break;
                case HF2_STATUS_EXEC_ERR:
                    this.error("execution error" + info);
                    break;
                default:
                    this.error("error " + res[2] + info);
                    break;
            }
            return null;
        })
            .catch(e => {
            console.debug(`HF2: ${e.message}; cmd=${cmd}`);
            this.error(e);
            return null;
        });
        return this.lock.enqueue("talk", () => this.sendMsgAsync(pkt).then(handleReturnAsync));
    }
    sendMsgAsync(buf, serial = 0) {
        // Util.assert(buf.length <= this.maxMsgSize)
        const frame = new Uint8Array(64);
        const loop = (pos) => {
            let len = buf.length - pos;
            if (len <= 0)
                return Promise.resolve();
            if (len > 63) {
                len = 63;
                frame[0] = HF2_FLAG_CMDPKT_BODY;
            }
            else {
                frame[0] = HF2_FLAG_CMDPKT_LAST;
            }
            if (serial)
                frame[0] =
                    serial == 1 ? HF2_FLAG_SERIAL_OUT : HF2_FLAG_SERIAL_ERR;
            frame[0] |= len;
            for (let i = 0; i < len; ++i)
                frame[i + 1] = buf[pos + i];
            if (!this.io)
                return Promise.resolve();
            return this.io.sendPacketAsync(frame).then(() => loop(pos + len));
        };
        return loop(0);
    }
    onEvent(id, f) {
        assert(!!(id & HF2_EV_MASK));
        this.eventHandlers[id + ""] = f;
    }
    onJDMessage(f) {
        this.talkAsync(HF2_CMD_JDS_CONFIG, encodeU32LE([1]));
        this.onEvent(HF2_EV_JDS_PACKET, f);
    }
    sendJDMessageAsync(buf) {
        return this.talkAsync(HF2_CMD_JDS_SEND, buf).then(() => { });
    }
    handleEvent(buf) {
        const evid = read32(buf, 0);
        const f = this.eventHandlers[evid + ""];
        if (f) {
            f(buf.slice(4));
        }
        else {
            this.io.log("unhandled event: " + evid.toString(16));
            // We can get these before we're ready to recv; this is fine.
            //if (evid === 0x800020) {
            //    this.io.onError(new Error("hf2 corrupted"))
            //}
        }
    }
    onSerial(data, iserr) {
        const msg = `hf2 serial: ${bufferToString(data)}`;
        if (iserr)
            console.warn(msg);
        else
            console.log(msg);
    }
    async postConnectAsync() {
        await this.checkMode();
        const buf = await this.talkAsync(HF2_CMD_INFO);
        this.io.log("Connected to: " + bufferToString(buf));
    }
    async checkMode() {
        // first check that we are not talking to a bootloader
        const info = await this.talkAsync(HF2_CMD_BININFO);
        const mode = read32(info, 0);
        this.io.log(`hf2 mode ${mode}`);
        if (mode == HF2_MODE_USERSPACE) {
            // all good
            this.io.log(`device in user-space mode`);
        }
        else if (mode == HF2_MODE_BOOTLOADER) {
            this.io.log(`device in bootloader mode, reseting into user-space mode`);
            await this.talkAsync(HF2_CMD_RESET_INTO_APP);
            // and fail
            throwError("Device in bootloader mode");
        }
        else {
            // unknown mdoe
            throwError("Unknown device operation mode");
        }
    }
    async disconnectAsync() {
        if (this.io) {
            const io = this.io;
            this.io = undefined;
            await io.disconnectAsync();
        }
    }
}

const MICROBIT_V2_VENDOR_ID = 3368;
const MICROBIT_V2_PRODUCT_ID = 516;
class CMSISProto {
    constructor(io) {
        this.io = io;
        this.q = new PromiseQueue();
        this.sendQ = [];
    }
    startRecvToLoop() {
        console.assert(!this._lastInterval);
        let last = this.recvTo;
        // do not use bus schedulere here
        this._lastInterval = setInterval(() => {
            if (!this.io)
                this.stopRecvToLoop();
            if (last && last == this.recvTo) {
                last();
            }
            last = this.recvTo;
        }, 200);
    }
    stopRecvToLoop() {
        if (this._lastInterval) {
            clearInterval(this._lastInterval);
            this._lastInterval = undefined;
        }
    }
    error(msg, code) {
        this.stopRecvToLoop();
        this.io?.error(msg, code);
        // clear state
        this.xchgAddr = null;
    }
    onJDMessage(f) {
        this._onJDMsg = f;
    }
    sendJDMessageAsync(buf) {
        if (buf.length & 3) {
            const tmp = new Uint8Array((buf.length + 3) & ~3);
            tmp.set(buf);
            buf = tmp;
        }
        return new Promise(resolve => {
            this.sendQ.push({
                buf,
                cb: resolve,
            });
        });
    }
    async disconnectAsync() {
        if (this.io) {
            console.debug(`micro:bit: disconnect proto`);
            this.stopRecvToLoop();
            this._onJDMsg = () => console.warn("rogue jd callback");
            const io = this.io;
            this.io = undefined;
            if (io)
                await io.disconnectAsync();
        }
    }
    recvAsync() {
        return new Promise((resolve, reject) => {
            // io may have been cleared
            if (!this.io) {
                reject(new Error("USB disconnected"));
                return;
            }
            this.io.recvPacketAsync().then(v => {
                const f = resolve;
                resolve = null;
                if (f) {
                    this.recvTo = null;
                    f(v);
                }
            }, err => {
                if (resolve) {
                    resolve = null;
                    this.recvTo = null;
                    reject(err);
                }
            });
            this.recvTo = () => {
                if (resolve) {
                    resolve = null;
                    reject(new Error("CMSIS recv timeout"));
                }
            };
        });
    }
    talkAsync(cmds) {
        return this.q.enqueue("talk", async () => {
            if (!this.io) {
                this.error("micro:bit disconnected");
                return; // disconnected
            }
            //console.log("TALK", cmds)
            await this.io.sendPacketAsync(new Uint8Array(cmds));
            if (!this.io) {
                this.error("micro:bit disconnected");
                return; // disconnected
            }
            let response = await this.recvAsync();
            if (response[0] !== cmds[0]) {
                const msg = `Bad response for ${cmds[0]} -> ${response[0]}, try again`;
                console.debug(msg, { cmds, response });
                try {
                    response = await this.recvAsync();
                }
                catch (e) {
                    // throw the original error in case of timeout
                    this.error(msg);
                }
                if (response[0] !== cmds[0])
                    this.error(msg);
            }
            return response;
        });
    }
    talkHexAsync(str) {
        return this.talkAsync(fromHex(str.replace(/ /g, "")));
    }
    decodeString(buf) {
        const len = buf[1];
        const ss = buf.slice(2, 2 + len);
        return uint8ArrayToString(ss);
    }
    dapDelay(micros) {
        const cmd = [0x09, 0, 0];
        if (micros > 0xffff)
            this.error("too large delay");
        write16(cmd, 1, micros);
        return this.talkAsync(cmd);
    }
    async setBaudRate() {
        const setBaud = [0x82, 0, 0, 0, 0];
        write32(setBaud, 1, 115200);
        await this.talkAsync(setBaud); // this reset the board on 0255
    }
    async xchgLoop() {
        let currSend;
        while (this.io) {
            const now = Date.now();
            if (Flags.diagnostics &&
                this.lastXchg &&
                now - this.lastXchg > 50) {
                console.warn("slow xchg: " + (now - this.lastXchg) + "ms");
            }
            this.lastXchg = now;
            let numev = 0;
            let inp = await this.readBytes(this.xchgAddr + 12, 256, true);
            if (inp[2]) {
                await this.writeWord(this.xchgAddr + 12, 0);
                await this.triggerIRQ();
                inp = inp.slice(0, inp[2] + 12);
                this._onJDMsg(inp);
                numev++;
            }
            let sendFree = false;
            if (currSend) {
                const send = await this.readBytes(this.xchgAddr + 12 + 256, 4);
                if (!send[2]) {
                    currSend.cb();
                    currSend = null;
                    sendFree = true;
                    numev++;
                }
            }
            if (!currSend && this.sendQ.length) {
                if (!sendFree) {
                    const send = await this.readBytes(this.xchgAddr + 12 + 256, 4);
                    if (!send[2])
                        sendFree = true;
                }
                if (sendFree) {
                    currSend = this.sendQ.shift();
                    const bbody = currSend.buf.slice(4);
                    await this.writeWords(this.xchgAddr + 12 + 256 + 4, new Uint32Array(bbody.buffer));
                    const bhead = currSend.buf.slice(0, 4);
                    await this.writeWords(this.xchgAddr + 12 + 256, new Uint32Array(bhead.buffer));
                    await this.triggerIRQ();
                    this.lastSend = Date.now();
                    numev++;
                }
                else {
                    if (this.lastSend) {
                        const d = Date.now() - this.lastSend;
                        if (d > 50) {
                            this.lastSend = 0;
                            console.warn("failed to send packet fast enough");
                        }
                    }
                }
            }
            if (await this.readSerial())
                numev++;
            if (numev == 0)
                await this.dapDelay(1000);
        }
    }
    async readSerial() {
        let buf = await this.talkAsync([0x83]);
        const len = buf[1];
        if (len) {
            buf = buf.slice(2, 2 + len);
            if (this.pendingSerial)
                buf = bufferConcat(this.pendingSerial, buf);
            let ptr = 0;
            let beg = 0;
            while (ptr < buf.length) {
                if (buf[ptr] == 10 || buf[ptr] == 13) {
                    const line = buf.slice(beg, ptr);
                    if (line.length)
                        console.debug("microbit: " + fromUTF8(uint8ArrayToString(line)));
                    beg = ptr + 1;
                }
                ptr++;
            }
            buf = buf.slice(beg);
            this.pendingSerial = buf.length ? buf : null;
            if (this.pendingSerial)
                this.lastPendingSerial = Date.now();
        }
        else if (this.pendingSerial) {
            const d = Date.now() - this.lastPendingSerial;
            if (d > 500) {
                const s = fromUTF8(uint8ArrayToString(this.pendingSerial));
                this.pendingSerial = null;
                console.log("SERIAL[TO]: " + s);
            }
        }
        return len;
    }
    async talkStringAsync(...cmds) {
        return this.talkAsync(cmds).then(buf => this.decodeString(buf));
    }
    async readDP(reg) {
        const nums = [0x05, 0, 1, 2 | reg, 0, 0, 0, 0];
        const buf = await this.talkAsync(nums);
        return read32(buf, 3);
    }
    async setupTAR(addr) {
        const nums = [5, 0, 2, 1, 0x52, 0, 0, 0x23, 5, 0, 0, 0, 0];
        write32(nums, 9, addr);
        await this.talkAsync(nums);
    }
    async writeWords(addr, data) {
        await this.setupTAR(addr);
        const MAX = 0xe;
        let ptr = 0;
        const reqHd = [6, 0, MAX, 0, 0xd];
        for (let i = 0; i < MAX * 4; ++i)
            reqHd.push(0);
        const req = new Uint8Array(reqHd);
        let overhang = 1;
        let ptrTX = 0;
        const count = data.length;
        const dataBytes = new Uint8Array(data.buffer);
        let lastCh = MAX;
        //console.log("WRITE", addr.toString(16), data)
        await this.q.enqueue("talk", async () => {
            while (ptr < count) {
                const ch = Math.min(count - ptrTX, MAX);
                if (ch) {
                    req[2] = ch;
                    req.set(dataBytes.slice(ptrTX * 4, (ptrTX + ch) * 4), 5);
                    if (!this.io) {
                        this.error("disconnected");
                        return;
                    }
                    await this.io.sendPacketAsync(ch == MAX ? req : req.slice(0, 5 + 4 * ch));
                    ptrTX += ch;
                    lastCh = ch;
                }
                if (overhang-- > 0)
                    continue;
                const buf = await this.recvAsync();
                if (buf[0] != req[0])
                    this.error(`bad response, ${buf[0]} != ${req[0]}`);
                if (buf[1] != MAX && buf[1] != lastCh)
                    this.error(`bad response, ${buf[1]} != ${MAX} && ${buf[1]} != ${lastCh}`);
                ptr += buf[1];
            }
        });
    }
    async readBytes(addr, count, jdmode = false) {
        if (addr & 3 || count & 3)
            this.error("unaligned");
        const b = await this.readWords(addr, count >> 2, jdmode);
        return new Uint8Array(b.buffer);
    }
    async readWords(addr, count, jdmode = false) {
        await this.setupTAR(addr);
        const MAX = 0xe;
        const res = new Uint32Array(count);
        let ptr = 0;
        const req = new Uint8Array([6, 0, MAX, 0, 0xf]);
        let overhang = 1;
        let ptrTX = 0;
        // console.log("READ", addr.toString(16), count)
        let numPending = 0;
        await this.q.enqueue("talk", async () => {
            while (ptr < count || numPending) {
                const ch = Math.min(count - ptrTX, MAX);
                if (ch > 0) {
                    req[2] = ch;
                    numPending++;
                    if (!this.io) {
                        this.error("disconnected");
                        return;
                    }
                    await this.io.sendPacketAsync(req);
                    ptrTX += ch;
                }
                if (overhang-- > 0)
                    continue;
                const buf = await this.recvAsync();
                numPending--;
                if (buf[0] != req[0]) {
                    this.error("bad response");
                    return;
                }
                const len = buf[1];
                const words = new Uint32Array(buf.slice(4, (1 + len) * 4).buffer);
                if (words.length != len) {
                    this.error("bad response2");
                    return;
                }
                res.set(words, ptr);
                // limit transfer, according to JD frame size
                if (jdmode && ptr == 0) {
                    const frmsz = new Uint8Array(res.buffer)[2];
                    const words = (frmsz + 12 + 3) >> 2;
                    if (count > words)
                        count = words;
                }
                ptr += words.length;
            }
        });
        return res;
    }
    async findExchange() {
        const memStart = 536870912;
        const memStop = memStart + 128 * 1024;
        const checkSize = 1024;
        let p0 = 0x20006000;
        let p1 = 0x20006000 + checkSize;
        const check = async (addr) => {
            if (addr < memStart)
                return null;
            if (addr + checkSize > memStop)
                return null;
            const buf = await this.readWords(addr, checkSize >> 2);
            for (let i = 0; i < buf.length; ++i) {
                if (buf[i] == 0x786d444a && buf[i + 1] == 0xb0a6c0e9)
                    return addr + (i << 2);
            }
            return 0;
        };
        // eslint-disable-next-line no-constant-condition
        while (true) {
            const a0 = await check(p0);
            if (a0)
                return a0;
            const a1 = await check(p1);
            if (a1)
                return a1;
            if (a0 === null && a1 === null)
                return null;
            p0 -= checkSize;
            p1 += checkSize;
        }
    }
    async triggerIRQ() {
        const addr = 0xe000e200 + (this.irqn >> 5) * 4;
        const data = new Uint32Array([1 << (this.irqn & 31)]);
        await this.writeWords(addr, data);
    }
    writeWord(addr, val) {
        return this.writeWords(addr, new Uint32Array([val]));
    }
    async reset() {
        await this.writeWord(0xe000edfc, 0); // DEMCR
        await this.writeWord(0xe000ed0c, 0x05fa0000 | (1 << 2)); // AIRCR
    }
    async postConnectAsync() {
        this.startRecvToLoop();
        const devid = await this.talkStringAsync(0x80);
        if (/^9902/.test(devid)) {
            this.error(`micro:bit v1 is not supported. sorry.`, ERROR_MICROBIT_V1);
            return;
        }
        if (!/^990[3456789]/.test(devid)) {
            this.error(`Invalid Vendor0 response: ` + devid, ERROR_MICROBIT_UNKNOWN);
            return;
        }
        this.io.log("DAPLink v" + (await this.talkStringAsync(0x00, 0x04)));
        await this.setBaudRate(); // this may reset the board
        const freq = [0x11, 0, 0, 0, 0];
        write32(freq, 1, 10000000);
        await this.talkAsync(freq);
        const inits = [
            "02 00",
            "04 00 64 00 00 00",
            // SWD switch
            "12 38 FF FF FF FF FF FF FF",
            "12 10 9E E7",
            "12 38 FF FF FF FF FF FF FF",
            "12 08 00",
            // read DPIDR
            "05 00 01 02 00 00 00 00",
            // clear errors
            "05 00 03 00 04 00 00 00 08 00 00 00 00 04 00 00 00 50",
        ];
        for (const ini of inits)
            await this.talkHexAsync(ini);
        for (let i = 0; i < 100; ++i) {
            const st = await this.readDP(4);
            const mask = (1 << 29) | (1 << 31);
            if ((st & mask) == mask)
                break;
            await delay(20);
        }
        await this.reset();
        await delay(1000); // the actual minimum until mbbridge starts seems to be 700ms; give it some more time just in case
        const xchg = await this.findExchange();
        if (xchg === null) {
            this.error(`exchange address not found; add jacdac to your project`, ERROR_MICROBIT_JACDAC_MISSING);
            return;
        }
        this.xchgAddr = xchg;
        const info = await this.readBytes(xchg, 16);
        this.irqn = info[8];
        if (info[12 + 2] != 0xff) {
            this.error("invalid memory; try power-cycling the micro:bit", ERROR_MICROBIT_INVALID_MEMORY);
            return;
        }
        // clear initial lock
        await this.writeWord(xchg + 12, 0);
        this.io.log(`exchange address: 0x${xchg.toString(16)}; irqn=${this.irqn}`);
        /* async */ this.xchgLoop().catch(e => {
            console.debug(e);
            this.error(e?.message || "an error occured");
        });
    }
}

const USB_FILTERS = {
    filters: [
        {
            // hf2 devices (incl. arcade)
            classCode: 255,
            subclassCode: HF2_DEVICE_MAJOR,
        },
        {
            // micro:bit v2
            vendorId: MICROBIT_V2_VENDOR_ID,
            productId: MICROBIT_V2_PRODUCT_ID,
        },
    ],
};
const controlTransferGetReport = 0x01;
const controlTransferSetReport = 0x09;
const controlTransferOutReport = 0x200;
const controlTransferInReport = 0x100;
class USBIO {
    constructor(options) {
        this.options = options;
        this.readLoopStarted = false;
        this.ready = false;
        this.rawMode = false;
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        this.onData = (v) => { };
        this.onError = (e) => {
            console.warn(`usb error: ${errorCode(e) || ""} ${e ? e.stack : e}`);
        };
    }
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    log(msg, v) {
        if (Flags.diagnostics) {
            if (v != undefined)
                console.debug("usb: " + msg, v);
            else
                console.debug("usb: " + msg);
        }
    }
    mkProto() {
        return this.isMicrobit() ? new CMSISProto(this) : new HF2Proto(this);
    }
    clearDev() {
        if (this.dev) {
            this.dev = null;
            this.epIn = null;
            this.epOut = null;
            this.onData = () => console.warn("rogue hf2 onData");
        }
    }
    disconnectAsync() {
        this.ready = false;
        if (!this.dev)
            return Promise.resolve();
        console.debug("close device");
        return this.dev
            .close()
            .catch(e => {
            // just ignore errors closing, most likely device just disconnected
            console.debug(e);
        })
            .then(() => {
            this.clearDev();
            return delay(500);
        });
    }
    recvPacketAsync() {
        if (!this.rawMode)
            this.error("rawMode required");
        return this.recvPacketCoreAsync();
    }
    recvPacketCoreAsync() {
        const final = (res) => {
            if (res.status != "ok")
                this.error("USB IN transfer failed");
            const arr = new Uint8Array(res.data.buffer);
            if (arr.length == 0)
                return this.recvPacketCoreAsync();
            return arr;
        };
        if (!this.dev)
            return Promise.reject(new Error("Disconnected"));
        if (!this.epIn) {
            return this.dev
                .controlTransferIn({
                requestType: "class",
                recipient: "interface",
                request: controlTransferGetReport,
                value: controlTransferInReport,
                index: this.iface.interfaceNumber,
            }, 64)
                .then(final);
        }
        return this.dev.transferIn(this.epIn.endpointNumber, 64).then(final);
    }
    error(msg, code) {
        const e = new JDError(`device ${this.dev ? this.dev.productName : "n/a"} (${msg})`, code);
        this.onError(e);
    }
    async readLoop() {
        if (this.rawMode || this.readLoopStarted)
            return;
        this.readLoopStarted = true;
        console.debug("start read loop");
        // eslint-disable-next-line no-constant-condition
        while (true) {
            if (!this.ready) {
                break;
                //await delay(300)
                //continue
            }
            try {
                const buf = await this.recvPacketCoreAsync();
                if (buf[0]) {
                    // we've got data; retry reading immedietly after processing it
                    this.onData(buf);
                }
                else {
                    // throttle down if no data coming
                    await delay(5);
                }
            }
            catch (err) {
                if (this.dev) {
                    this.onError(err);
                    await this.disconnectAsync();
                }
                await delay(300);
            }
        }
    }
    sendPacketAsync(pkt) {
        if (!this.dev)
            return Promise.reject(new Error("Disconnected"));
        assert(pkt.length <= 64);
        if (!this.epOut) {
            return this.dev
                .controlTransferOut({
                requestType: "class",
                recipient: "interface",
                request: controlTransferSetReport,
                value: controlTransferOutReport,
                index: this.iface.interfaceNumber,
            }, pkt)
                .then(res => {
                if (res.status != "ok")
                    this.error("USB CTRL OUT transfer failed");
            });
        }
        return this.dev
            .transferOut(this.epOut.endpointNumber, pkt)
            .then(res => {
            if (res.status != "ok")
                this.error("USB OUT transfer failed");
        });
    }
    isMicrobit() {
        return (this.dev && this.dev.productId == 516 && this.dev.vendorId == 3368);
    }
    checkDevice() {
        this.iface = undefined;
        this.altIface = undefined;
        if (!this.dev)
            return false;
        console.debug("connect device: " +
            this.dev.manufacturerName +
            " " +
            this.dev.productName);
        // resolve interfaces
        const subcl = this.isMicrobit() ? 0 : HF2_DEVICE_MAJOR;
        for (const iface of this.dev.configuration.interfaces) {
            const alt = iface.alternates[0];
            if (alt.interfaceClass == 0xff && alt.interfaceSubclass == subcl) {
                this.iface = iface;
                this.altIface = alt;
                break;
            }
        }
        if (this.isMicrobit())
            this.rawMode = true;
        return !!this.iface;
    }
    async tryReconnectAsync(deviceId) {
        try {
            const devices = await this.options.getDevices(USB_FILTERS);
            this.dev = deviceId
                ? devices.find(dev => dev.serialNumber === deviceId)
                : devices[0];
        }
        catch (e) {
            console.log(e);
            this.dev = undefined;
        }
    }
    async requestDeviceAsync() {
        try {
            this.dev = await this.options.requestDevice(USB_FILTERS);
        }
        catch (e) {
            console.log(e);
            this.dev = undefined;
        }
    }
    async connectAsync(background, deviceId) {
        await this.tryReconnectAsync(deviceId);
        if (!this.dev && !background)
            await this.requestDeviceAsync();
        // background call and no device, just give up for now
        if (!this.dev && background)
            throwError("device not paired", true);
        // let's connect
        await this.openDeviceAsync();
        const proto = this.mkProto();
        try {
            await proto.postConnectAsync();
        }
        catch (e) {
            console.debug(e);
            await proto.disconnectAsync();
            throw e;
        }
        return proto;
    }
    async openDeviceAsync() {
        if (!this.dev)
            throwError("device not found");
        if (!this.checkDevice())
            throwError("device does not support HF2");
        await this.dev.open();
        await this.dev.selectConfiguration(1);
        if (this.altIface.endpoints.length) {
            this.epIn = this.altIface.endpoints.filter(e => e.direction == "in")[0];
            this.epOut = this.altIface.endpoints.filter(e => e.direction == "out")[0];
            assert(this.epIn.packetSize == 64);
            assert(this.epOut.packetSize == 64);
        }
        console.debug("claim interface");
        await this.dev.claimInterface(this.iface.interfaceNumber);
        console.debug("all connected");
        this.ready = true;
        /* no await */ this.readLoop();
    }
}

const { debug: debug$1 } = console;
class USBTransportProxy {
    constructor() { }
    async connect(deviceId) {
        debug$1(`jdsw: connect`, { deviceId });
        if (this.hf2) {
            debug$1(`jdsw: cleanup hf2`);
            await this.hf2.disconnectAsync();
            this.hf2 = undefined;
        }
        const io = new USBIO({
            getDevices: () => navigator.usb.getDevices(),
        });
        io.onError = e => {
            debug$1(`jdsw: error`, e);
            postMessage({
                jacdac: true,
                type: "error",
                error: {
                    message: e.message,
                    stack: e.stack,
                    name: e.name,
                    jacdacName: errorCode(e),
                },
            });
        };
        const onJDMessage = (buf) => {
            self.postMessage({
                jacdac: true,
                type: "frame",
                payload: buf,
            });
        };
        this.hf2 = await io.connectAsync(true, deviceId);
        this.hf2.onJDMessage(onJDMessage);
    }
    async send(payload) {
        await this.hf2?.sendJDMessageAsync(payload);
    }
    async disconnect() {
        debug$1(`jdsw: disconnect`);
        const h = this.hf2;
        this.hf2 = undefined;
        if (h)
            await h.disconnectAsync();
    }
}

const { debug } = console;
debug(`jdsw: starting...`);
let proxy;
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function handleError(resp, e) {
    self.postMessage({
        ...resp,
        error: {
            message: e.message,
            stack: e.stack,
            name: e.name,
            jacdacName: errorCode(e),
        },
    });
}
// eslint-disable-next-line @typescript-eslint/no-explicit-any
async function handleCommand(resp, handler) {
    try {
        await handler();
        self.postMessage(resp);
    }
    catch (e) {
        handleError(resp, e);
    }
}
async function handleMessage(event) {
    const { data } = event;
    const { jacdac, type, payload } = data;
    if (!jacdac)
        return; // someone else's message
    switch (type) {
        case "connect": {
            if (proxy)
                await proxy.disconnect();
            const { deviceId } = data;
            debug(`jdsw: connecting`);
            proxy = new USBTransportProxy();
            await handleCommand(data, () => proxy.connect(deviceId));
            break;
        }
        case "packet":
            //info(`jdsw: send`)
            proxy?.send(payload).then(() => { }, e => handleError(payload, e));
            // don't wait or acknowledge
            break;
        case "disconnect":
            if (proxy) {
                debug(`jdsw: disconnecting`);
                await handleCommand(data, () => proxy?.disconnect());
            }
            break;
    }
}
self.addEventListener("message", handleMessage);
debug(`jdsw: ready...`);
//# sourceMappingURL=jacdac-worker.js.map
