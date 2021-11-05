var friendList =[];
/* guardar_localstorage(id1); */

function mostrarId1(){
    let id1= document.getElementById("id1").value;
    console.log(id1)
    
    friendList.push(id1)
    localStorageFriendList(friendList);

}

function getfriendList(){
    var storedList = localStorage.setItem('localFriendList');
    if(storedList == null){
        friendList = [];
    }else{
        friendList = (storedList);
    }
    return friendList;

}

function localStorageFriendList(plist){
    localStorage.setItem('localFriendList', plist);
}

