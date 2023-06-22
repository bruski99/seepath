<div align="center"> 

  ![seepathwhtie](https://github.com/bruski99/seepath/assets/114541522/b8a32c9d-84a2-43e4-8d52-50f4219c1a96)

</div>

https://bruski99.github.io/seepath/

Welcome to the SeePath project! This project aims to assist blind individuals in navigating difficult spaces using ultrasonic sensors and a web-based interface that connects to a database. With this system, users can receive real-time alerts about obstacles in their path, enhancing their mobility and safety.

## Features

- Ultrasonic sensors detect obstacles and measure distances accurately.
- ESP32 microcontroller processes sensor data and provides instant feedback.
- Web interface allows users to access information from any connected device.
- Database integration enables seamless storage and retrieval of obstacle data.
- Intuitive and user-friendly design for an optimal user experience.

## Hardware Requirements

To get started with this project, you will need the following hardware components:

- ESP32 development board
- Ultrasonic sensors (HC-SR04 or similar)
- Breadboard and jumper wires
- USB cable for programming and power

## Software Requirements

Ensure that you have the following software installed before proceeding:

- Arduino IDE (https://www.arduino.cc/en/software)
- ESP32 board support package for Arduino IDE
- Required libraries (Ultrasonic, WiFi, WebServer, etc.)

## Installation and Setup

1. Clone or download this repository: `git clone https://github.com/username/project.git`.
2. Open the Arduino IDE and install the ESP32 board support package.
3. Connect the ESP32 board to your computer using the USB cable.
4. Open the project in the Arduino IDE (`project.ino` file).
5. Modify the necessary configuration parameters in the code.
6. Compile and upload the code to the ESP32 board.
7. Set up the web server and database based on the provided instructions.
8. Connect the ultrasonic sensors to the designated pins on the ESP32 board.

## Usage

1. Power on the ESP32 board and ensure it is connected to the Wi-Fi network.
2. Open a web browser on any connected device.
3. Enter the IP address of the ESP32 board in the browser's address bar.
4. The web interface will display obstacle information and real-time alerts.
5. Use the feedback received to navigate through difficult spaces safely.

## Contributing

Contributions to this project are welcome! You can contribute by submitting bug reports, feature requests, or pull requests through GitHub. Let's work together to enhance the functionality and usability of the ESP32 Blind Navigation project.

## License

This project is licensed under the [Creative Commons Zero Universal v1.0](https://creativecommons.org/publicdomain/zero/1.0/) license. The Creative Commons Zero license allows you to dedicate your work to the public domain, meaning that others can freely use, modify, and distribute your project without any restrictions. By choosing this license, you ensure maximum freedom for the users of your project and promote open collaboration.

Please note that this license only applies to the project itself and not necessarily to any third-party libraries or components used in the project. Make sure to review and comply with the licenses of any external dependencies.

