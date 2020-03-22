import SR from '../../../images/products/SR.png';
import SA from '../../../images/products/DA.png';
import DA from '../../../images/products/SA.png';
import PI from '../../../images/products/PI.png';



const data = [
    {
        title : 'Urdu Speech Recognition',
        intro : 'Convert the Urdu noisy calls to urdu text with an api end point',
        list : ['Fast and Efficient', 'High Accuracy', 'Uses Famous Kaldi Module'],
        image : SR
    },
    {
        title : 'Sentiment Analysis',
        intro : 'Tell the Customer Sentiments like Happy, Angry, Upset',
        list : ['Based on tonality', 'Cutting Edge Machine Learning', 'Acoustic Model'],
        image : SA
    },
    {
        title : 'Data Analytics',
        intro : 'Some basic kind of Data analytics on the text ',
        list : ['NLTK Library', 'Frequency Counter',  'N-Gram Model'],
        image : DA
    },
    {
        title : 'Problem Identification Model',
        intro : 'The algorithm tells the issue faced by the customer by classification',
        list : ['Based on Probabilistic Models', 'Models with different Accuracies', 'Highly Data Dependent'],
        image : PI
    }
]

export default data;