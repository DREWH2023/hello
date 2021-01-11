

def on_gesture_shake():
    pass
input.on_gesture(Gesture.Shake, on_gesture_shake)

def on_button_pressed_a():
    workout()
input.on_button_pressed(Button.A, on_button_pressed_a)

def on_button_pressed_b():
    workout()
input.on_button_pressed(Button.B, on_button_pressed_b)

def workout():
    if input.on_gesture(Gesture.Shake, on_gesture_shake):
        basic.show_string("5 Jumping Jacks!")
    elif input.on_button_pressed(Button.A, on_button_pressed_a):
        basic.show_string("10 Push-Ups!")
    elif input.on_button_pressed(Button.B, on_button_pressed_b):
        ("10 Burpees!")

workout()
basic.show_string("Ready to work? Lets start")
basic.show_string("Shake, press B, or press A!")




