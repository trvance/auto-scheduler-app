# auto-scheduler-app

# How to get started:  
-Download  
-From one terminal cd into 'auto-scheduler-app/server' directory and run 'npm start' command  
-From another terminal cd into 'auto-scheduler-app/client' directory and run 'npm start' command  

# How to use:  
-To add an employee either click the 'Add Employee' button from the Home page or navigate to the Employees page and click the '+' button  
-Once there are some employees you will be able to use the 'generate schedule' button on the Home page  

# Misc/Known bugs:
-The schedule that is generated is made for the week after the current week  
-Under the Employees page, the View All switch changes to the current week by default.(The DevExtremeScheduler API doesn't like the flip animation and causes a weird visual bug but it's fine when navigating using the Arrow Buttons for the days)  
-The 'Submit' button on the Add Employee Form requires 2 clicks? Couldn't figure that out...
