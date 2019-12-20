import firebase from 'firebase/app';
import 'firebase/auth';


const getCoachUid = () => firebase.auth().currentUser.uid;

export default { getCoachUid };
