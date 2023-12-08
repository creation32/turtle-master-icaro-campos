def on_pin_pressed_p0():
    if pins.analog_read_pin(AnalogPin.P0) > 300:
        turtle.forward(2)
        turtle.pen(TurtlePenMode.DOWN)
        turtle.set_brightness(115)
    elif pins.analog_read_pin(AnalogPin.P0) < 300:
        turtle.forward(1)
        turtle.set_brightness(0)
input.on_pin_pressed(TouchPin.P0, on_pin_pressed_p0)

def on_button_pressed_a():
    turtle.turn_left()
    turtle.forward(1)
input.on_button_pressed(Button.A, on_button_pressed_a)

def on_button_pressed_b():
    turtle.turn_right()
    turtle.forward(1)
input.on_button_pressed(Button.B, on_button_pressed_b)

turtle.set_position(2, 2)

def on_forever():
    pass
basic.forever(on_forever)
