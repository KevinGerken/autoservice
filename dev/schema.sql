CREATE TABLE orders (
    id INT AUTO_INCREMENT PRIMARY KEY,
    detail VARCHAR(5000),
    active TINYINT(1),
    order_date DATE,
    labor_cost DECIMAL(7,2),
    manufacturer VARCHAR(255),
    model VARCHAR(255),
    oil_type VARCHAR(255),
    name_plate_pressure VARCHAR(255),
    belt_size INT,
    belt_qty INT,
    motor_hp INT,
    motor_volts INT,
    motor_amps INT,
    motor_phase VARCHAR(255),
    motor_sf VARCHAR(255),
    motor_rpm INT,
    motor_frame VARCHAR(255),
    email VARCHAR(100),
    first_name VARCHAR(100),
    last_name VARCHAR(100),
    street VARCHAR(255),
    city VARCHAR(100),
    st CHAR(2),
    zip INT(5),
    phone VARCHAR(15)
);

CREATE TABLE parts (
    id INT AUTO_INCREMENT PRIMARY KEY,
    part_name VARCHAR(255),
    price DECIMAL(7,2),
    order_id INT,
    FOREIGN KEY(order_id) REFERENCES orderS(id)
);
