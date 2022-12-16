Tab Group Default Pages

# Todos


Implement classes for each object i need to interact with 
    Starting with GroupDefault and StoreAccessor 
    once I have those look at my view javascript and see how those files interact with the models 
    potentially I could make classes to represent the views as well but don't need to go overboard. 
    Get it back to working as it was before I put all the functionality in classes lol. 
    Starting with making sure the Store has the right shape and is saving the url when I click 
    and making sure I can make a default save itself 
    or that my current tab object can get it's GroupDefault (or it's null) by getGroupDefault(name)
    DELETE GROUP IDS THEY"RE IN TEH WAY AND USELESS. (comment it out)
    make sure current tab also has a true or false "isInGroup"
    and make sure that when I'm on the current tab I have the ability to updateGroupDefault with groupDefault.save. 
    HERE: UPDATE groupDefault.save to filter by NAME. 
    If you do this then things can be simpler. 
    And you can hit groupDefault.save and it'll definitley delete the old one. 
    Only one with a certain name.And

    Once I'm done with all that then go back to the readme todos

- Logo Design
- Flush out options page with list of saved group names and their defaults
- Show 1. All active groups of different names and their default url
- Show 2. All inactive groups and their url
- Extra 3. Allow a reassignment of a default page onto another group?
- Give an option to delete a saved group from the options page
- Style the popup
-Release to production