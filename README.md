
# Travel Cost Estimator
This web app dynamically estimates travel costs based on user inputs and displays the cost and route on a map.

This project is deployed at https://travel-cost-estimator.herokuapp.com/

## Overview
The start point is placed in central London and the destinations are randomly placed throughout the greater London area.The locations could be generated from API data with very few changes. 

The user can select one of three travel estimate types:

&nbsp;&nbsp;&nbsp;**Trip Distance**: Uses Google direction API data to find the travel distance. It is the    distance a vehicle would typically take using the best route. 

&nbsp;&nbsp;&nbsp;**Trip Time**: Uses Google direction API data to find the travel time.It is the time a vehicle would typically take using the best route. 

&nbsp;&nbsp;&nbsp;**Crow Flies Distance**: Uses the Haversine formula to find the straight line distance.

Then the user can select an estimate type:

&nbsp;&nbsp;&nbsp;**Flat Rate**: Flat amount of money per unit of distance or time

&nbsp;&nbsp;&nbsp;**Variable Rate**: Fixed amount of money for first unit of distance or time then flat rate thereafter


The app then calculates the estimates for all the routes and can generate a path when the destination is clicked.

The app was built using create react app.

It uses react and redux and the Google maps and directions APIs.
