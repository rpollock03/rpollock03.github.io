const robstagram = {
    "title": "Robstagram! My social media clone!",
    "slug": "robstagram",
    "summary": "With the rather unimaginative name of 'robstagram' I set out to build a fully functional Instagram clone using ReactNative, Redux, and Firestore!",
    "categories": ["projects", "dev"],
    "text":
        "So Robstagram. Does most of the things Instagram does. Users can: create an account / login; edit their profile; post pictures from their gallery or camera; search for and find other users; follow or unfollow users; view the posts of users they are following via their newsfeed; and comment on those posts. ",
    "text1":
        "I had built a very basic social media site previously using vanilla Javascript mostly, but I wanted to try something more complex and ambitious in order to help cement some new tech that I had learnt - namely ReactNative, Redux and Firebase. I'm a big believer in learning by doing, and these technologies would also allow me to build something a lot more powerful and impressive than anything I had made previously.",
    "text2":
        "Most of the styling has been done with the help of 'React Native Elements' - a cross-platform, React Native UI Toolkit. The logo is just regular text styled with the billabong font used by Instagram. You would think that something as trivial as importing a custom font would be easy, but it actually gave me a lot more trouble than some of the more advanced features! My basic approach was to implement user auth first along with a basic screen navigation structure. I found Firebase's user authentication service to be fantastic and surprisingly easy to setup (much easier than manually building a backend server as I have done previously!). Ditto with react-native-navigation, though I did find it a bit tricky nesting navigators (I was using both stack and tab navigators together). Anyway, at first it was really just a bunch of connected screens with h1 placeholder text everywhere, and I systematically went through adding functionality to each screen.",
    "text3":
        "Expo's camera and imagepicker galleries made what I thought was going to be a difficult task relatively straightforward. What I REALLY struggled with was implementing Redux, something I had only just learnt. Before this project I didn't get why it was needed, with things like useContext available. I hated all the boilerplate and complexity, and the time it took to identify bugs. I'm not going to lie, working with it in this project was brutal but by the end of it I totally get it and think it's pretty cool. What really helped me understand Redux was using it with Hooks (useDispatch/useSelector) rather than the Redux terminology like 'mapStateToProps' etc which I found  hard to follow (why do I always seem to learn the most complicated way of doing something first?!). Anyway, my redux store had two reducers: user (for the data of the individual user currently logged in) and userS (which essentially contained the data for all the posts that would appear in a user's newsfeed). This setup worked well with the folder structure in my firebase store, which was organised into three groups - following, posts and users. I love Firebases' simple document-collection model! So posts was a collection of post documents; each of those documents contained the post information and another collection of comments; each comment document in that collection contained the comment data etc. I spent quite a while trying different options for organising data storage, but I think this turned out really great. When a user logs in, the posts belonging to all the users they are following (stored in, you guessed it, the 'following' collection) are retrieved via a for-loop and Firebase method, then sorted and stored in redux.",
    "text4":
        "I love finding a simple solution to a seemingly complicated problem. In Instagram, a user's own posts also show up in their newsfeed. I was having trouble implementing this, and had come up with all sorts of complicated ways to merge both 'user' and 'users' posts, until I struck upon a beautifully simple solution! When a user is being signed up on firebase, a function added their userId to the list of users that they are following - so they would technically be following themselves. This meant they were included in the aforementioned for-loop and their posts would be retrieved and merged along with any other users they would later follow! The last feature I added was the 'pull to refresh' on the newsfeed, which I think looks so cool!",

    "blockquote": "What really helped me understand Redux was using it with Hooks (useDispatch/useSelector) rather than the Redux terminology like 'mapStateToProps' etc which I found  hard to follow",
    "picture": require("../BlogPics/robstagram.gif"),
    "caption": "So proud of how great the commenting feature turned out!",
    "picture2": require("../BlogPics/robstagramlogin.jpg"),
    "caption2": "Login page, built with a custom font and react native elements.",
    "picture3": require("../BlogPics/robstagramfollow.gif"),
    "caption3": "Search for, then follow, another user. After a pull-to-refresh that user's posts will be added to your newsfeed!",
    "date": "7 April, 2021",

}

export default robstagram