import pyautogui 
import time 
import random 


#mainly used to create a random time delay to mimic normal human behaviour
def random_time_generator():
    return random.randint(0,3)    

def sleeper():
    time.sleep(random_time_generator())


#moves mouse to random locations on the screen and uses the random sleep generator to mimic normal mouse movement
def mover():
    
    #returns random mouse position on screen
    def random_mouse_position_x():
        return random.randint(0,1920)
    def random_mouse_position_y():
        return random.randint(0, 1080)
    
    pyautogui.moveTo(random_mouse_position_x(), random_mouse_position_y(), random_time_generator())
    sleeper()
    #pyautogui.moveTo(random_mouse_position_x(), random_mouse_position_y(), random_time_generator())

def main():
    print('Press CTL-C to quit')
    try:
        while True:
            mover()
    except KeyboardInterrupt:
        print('\n')
        
main() 