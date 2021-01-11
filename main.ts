function on_gesture_shake() {
    
}

input.onGesture(Gesture.Shake, on_gesture_shake)
function on_button_pressed_a() {
    workout()
}

input.onButtonPressed(Button.A, on_button_pressed_a)
function on_button_pressed_b() {
    workout()
}

input.onButtonPressed(Button.B, on_button_pressed_b)
function workout() {
    if (input.onGesture(Gesture.Shake, on_gesture_shake)) {
        basic.showString("5 Jumping Jacks!")
    } else if (input.onButtonPressed(Button.A, on_button_pressed_a)) {
        basic.showString("10 Push-Ups!")
    } else if (input.onButtonPressed(Button.B, on_button_pressed_b)) {
        /** 10 Burpees! */
    }
    
}

workout()
basic.showString("Ready to work? Lets start")
basic.showString("Shake, press B, or press A!")
