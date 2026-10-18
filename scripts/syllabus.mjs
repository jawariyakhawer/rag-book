// Single source of truth for the book content (based on Miss Javeria Hassan's SMIT
// "AI and Data Science Syllabus"). generate-docs.mjs turns this into Docusaurus pages.
// Every topic has an English explanation (en) and a Roman Urdu one (ur).
// Optional `code` = array of lines shown as a Python example.

export const course = {
  duration: '10 Months (could be extended to 11 months)',
  level: 'Beginner to Advanced',
  prerequisites: 'Basic knowledge of programming is preferred but not mandatory.',
};

export const week1 = {
  n: 1,
  title: 'Course Introduction and Setup',
  topics: [
    {
      t: 'Course intro, expectations and roadmap overview',
      en: 'You get the full picture of the 10-month journey: nine modules that take you from Python basics to Machine Learning, Deep Learning, MLOps, Big Data, Generative AI and Agentic AI. Each module ends with class-based and home-based projects and a presentation.',
      ur: 'Is hafte mein poore 10 mahine ka roadmap samjhaya jata hai. Nau modules hain jo Python ke basics se shuru ho kar Machine Learning, Deep Learning, MLOps, Big Data, Generative AI aur Agentic AI tak jaate hain. Har module ke end par class aur home projects hote hain aur ek presentation bhi.',
    },
    {
      t: 'Python installation and IDE setup',
      en: 'Install Python, set up an editor such as VS Code (or Jupyter), create a virtual environment and run your first script to confirm everything works.',
      ur: 'Python install karein, VS Code (ya Jupyter) jaisa editor set karein, virtual environment banayein aur pehli script chala kar check karein ke sab theek chal raha hai.',
      code: [
        'python --version',
        'python -m venv venv',
        '# Windows: venv\\Scripts\\activate     Mac/Linux: source venv/bin/activate',
        'print("Hello, AI & Data Science!")',
      ],
    },
  ],
};

export const modules = [
  {
    n: 1,
    slug: 'python-foundations',
    title: 'Python Foundations',
    range: [2, 6],
    intro: {
      en: 'Python is the language of data science. This module builds a solid base: syntax, control flow, functions, data structures, files, errors and object-oriented programming.',
      ur: 'Python data science ki zabaan hai. Ye module aapki buniyad banata hai: syntax, control flow, functions, data structures, files, errors aur object-oriented programming.',
    },
    weeks: [
      {
        n: 2,
        title: 'Variables, Data Types, Operators and Conditions',
        topics: [
          {
            t: 'Variables, Data Types, Operators',
            en: 'Understand different data types (int, float, str, bool), declare variables, and use arithmetic, logical and comparison operators.',
            ur: 'Alag alag data types (int, float, str, bool) samjhein, variables banayein aur arithmetic, logical aur comparison operators istemal karein.',
            code: [
              'name = "Ali"          # str',
              'age = 21              # int',
              'gpa = 3.6             # float',
              'is_student = True     # bool',
              'print(age + 5, age > 18, age > 18 and gpa > 3.5)',
            ],
          },
          {
            t: 'Conditional Statements',
            en: 'Use if, elif and else so your program can make decisions.',
            ur: 'if, elif aur else ke zariye program ko faislay karna sikhayein.',
            code: [
              'marks = 72',
              'if marks >= 80:',
              '    print("A")',
              'elif marks >= 60:',
              '    print("B")',
              'else:',
              '    print("Work harder")',
            ],
          },
        ],
      },
      {
        n: 3,
        title: 'Loops, Functions, Lambda and Modules',
        topics: [
          {
            t: 'Loops and Iterations',
            en: 'Repeat tasks with for and while loops, and control them with break and continue.',
            ur: 'for aur while loops se kaam dohraein, aur break/continue se loop ko control karein.',
            code: [
              'for i in range(1, 6):',
              '    if i == 3:',
              '        continue',
              '    print(i)',
              '',
              'n = 3',
              'while n > 0:',
              '    print(n)',
              '    n -= 1',
            ],
          },
          {
            t: 'Functions, Lambda, Modules',
            en: 'Create reusable blocks of code with functions, write small anonymous functions with lambda, and import Python modules.',
            ur: 'Functions se dobara istemal hone wala code banayein, lambda se chhote anonymous functions likhein aur Python modules import karein.',
            code: [
              'import math',
              '',
              'def area(r):',
              '    return math.pi * r ** 2',
              '',
              'square = lambda x: x * x',
              'print(area(3), square(4))',
            ],
          },
        ],
      },
      {
        n: 4,
        title: 'Data Structures and File Handling',
        topics: [
          {
            t: 'Python Data Structures',
            en: 'Work with lists, tuples, dictionaries and sets to organize and manage data.',
            ur: 'Lists, tuples, dictionaries aur sets ke zariye data ko organize aur manage karna seekhein.',
            code: [
              'fruits = ["apple", "mango"]         # list',
              'point = (3, 4)                      # tuple',
              'student = {"name": "Ali", "age": 21}  # dict',
              'unique = {1, 2, 2, 3}               # set -> {1, 2, 3}',
              'fruits.append("banana")',
            ],
          },
          {
            t: 'File Handling',
            en: 'Read from and write to files so your data survives after the program ends.',
            ur: 'Files se data parhna aur likhna seekhein taake program band hone ke baad bhi data mehfooz rahe.',
            code: [
              'with open("notes.txt", "w") as f:',
              '    f.write("Hello file")',
              '',
              'with open("notes.txt") as f:',
              '    print(f.read())',
            ],
          },
        ],
      },
      {
        n: 5,
        title: 'Exception Handling and OOP',
        topics: [
          {
            t: 'Exception Handling',
            en: 'Handle errors gracefully with try, except and finally instead of letting the program crash.',
            ur: 'try, except aur finally se errors ko saleeqay se handle karein taake program crash na ho.',
            code: [
              'try:',
              '    x = int(input("Number: "))',
              '    print(10 / x)',
              'except ZeroDivisionError:',
              '    print("Cannot divide by zero")',
              'except ValueError:',
              '    print("Please enter a number")',
              'finally:',
              '    print("Done")',
            ],
          },
          {
            t: 'Object-Oriented Programming',
            en: 'Classes, objects, inheritance and encapsulation: model real-world things as code.',
            ur: 'Classes, objects, inheritance aur encapsulation: real duniya ki cheezon ko code mein model karna.',
            code: [
              'class Student:',
              '    def __init__(self, name, marks):',
              '        self.name = name',
              '        self.marks = marks',
              '',
              '    def grade(self):',
              '        return "Pass" if self.marks >= 50 else "Fail"',
              '',
              'print(Student("Ali", 72).grade())',
            ],
          },
        ],
      },
      {
        n: 6,
        title: 'Module 01 Projects',
        topics: [],
        projects: {
          class: [
            ['Student Grading System', 'Use OOP concepts to calculate and manage student grades.', 'OOP se students ke grades calculate aur manage karne wala system.'],
            ['Salary/Billing System (OOP)', 'Design a billing system using classes and objects.', 'Classes aur objects se billing system design karein.'],
          ],
          home: [
            ['Employee Record System', 'A file handling project to store and manage employee details.', 'File handling se employees ki details save aur manage karne ka project.'],
            ['Library Management System (File Handling)', 'Manage books and members using file operations.', 'File operations se books aur members manage karne ka system.'],
          ],
        },
      },
    ],
  },
  {
    n: 2,
    slug: 'python-for-data-science',
    title: 'Python for Data Science (NumPy, Pandas, Visualization)',
    range: [7, 10],
    intro: {
      en: 'Learn the core data science toolkit: fast numerical computing with NumPy, tabular data with Pandas, cleaning messy data and telling stories with charts.',
      ur: 'Data science ke asal tools seekhein: NumPy se tez numerical computing, Pandas se tabular data, ganda data saaf karna aur charts se kahani batana.',
    },
    weeks: [
      {
        n: 7,
        title: 'NumPy and Pandas Basics',
        topics: [
          {
            t: 'NumPy Core Operations',
            en: 'Numerical computing with arrays, vectorized operations and mathematical functions for efficient data handling.',
            ur: 'Arrays, vectorized operations aur mathematical functions ke sath tez aur asaan numerical computing.',
            code: [
              'import numpy as np',
              'a = np.array([1, 2, 3, 4])',
              'print(a * 2, a.mean(), a.sum())',
              'print(np.arange(0, 10, 2))',
            ],
          },
          {
            t: 'Pandas DataFrames',
            en: 'An introduction to tabular data: create, index and manipulate DataFrames.',
            ur: 'Tabular data ka taaruf: DataFrame banana, index karna aur us mein tabdeeli karna.',
            code: [
              'import pandas as pd',
              'df = pd.DataFrame({"name": ["Ali", "Sara"], "marks": [72, 88]})',
              'print(df[df.marks > 80])',
            ],
          },
        ],
      },
      {
        n: 8,
        title: 'Data Cleaning and Missing Values',
        topics: [
          {
            t: 'Data Cleaning and Transformation',
            en: 'Techniques to clean, normalize and prepare data for analysis.',
            ur: 'Data ko saaf karna, normalize karna aur analysis ke liye tayyar karna.',
          },
          {
            t: 'Handling Missing Values',
            en: 'Identify and manage missing or null data in datasets (drop, fill, interpolate).',
            ur: 'Dataset mein missing ya null values dhoondna aur unhein handle karna (drop, fill, interpolate).',
            code: [
              'df.isna().sum()          # count missing values',
              'df["age"] = df["age"].fillna(df["age"].median())',
              'df = df.dropna(subset=["city"])',
            ],
          },
        ],
      },
      {
        n: 9,
        title: 'Merging, GroupBy and Visualization',
        topics: [
          {
            t: 'Merging and GroupBy',
            en: 'Combine datasets and run aggregations for analysis.',
            ur: 'Datasets ko jorna aur aggregation (jaise group wise total/average) nikalna.',
            code: [
              'merged = orders.merge(customers, on="customer_id")',
              'print(merged.groupby("city")["amount"].sum())',
            ],
          },
          {
            t: 'Data Visualization (Matplotlib, Seaborn, Plotly)',
            en: 'Create charts, plots and interactive visualizations to explore and present data.',
            ur: 'Charts, plots aur interactive visualizations bana kar data ko samajhna aur pesh karna.',
            code: [
              'import matplotlib.pyplot as plt',
              'plt.plot([1, 2, 3], [2, 4, 9])',
              'plt.title("My first chart")',
              'plt.show()',
            ],
          },
        ],
      },
      {
        n: 10,
        title: 'Module 02 Projects',
        topics: [],
        projects: {
          class: [
            ['COVID Dataset Exploratory Data Analysis (EDA)', 'Analyze COVID-19 data to extract insights and trends.', 'COVID-19 data ka tajzia kar ke trends nikalein.'],
            ['Sales Dashboard using Pandas + Plotly', 'Build an interactive dashboard for visualizing sales performance.', 'Sales performance dekhne ke liye interactive dashboard banayein.'],
          ],
          home: [
            ['E-commerce Customer EDA', 'Analyze customer behavior and purchase patterns with real-world datasets.', 'Real datasets se customers ke khareedne ke patterns samjhein.'],
            ['Weather Data Analysis Notebook', 'Analyze and visualize historical weather data.', 'Purane mausam ke data ka analysis aur visualization.'],
          ],
        },
      },
    ],
  },
  {
    n: 3,
    slug: 'statistics-and-math-for-ml',
    title: 'Statistics and Math for ML',
    range: [11, 14],
    intro: {
      en: 'Machine learning stands on statistics, probability and linear algebra. This module gives you the math you actually need, with data-driven examples.',
      ur: 'Machine learning statistics, probability aur linear algebra par khari hoti hai. Ye module wo math sikhata hai jo waqai zaroori hai, data ki misaalon ke sath.',
    },
    weeks: [
      {
        n: 11,
        title: 'Descriptive Statistics and Probability',
        topics: [
          {
            t: 'Descriptive Statistics',
            en: 'Summarize data with mean, median, mode, variance and standard deviation.',
            ur: 'Mean, median, mode, variance aur standard deviation se data ka khulasa nikalna.',
            code: [
              'import numpy as np',
              'x = np.array([4, 8, 6, 5, 9])',
              'print(x.mean(), np.median(x), x.var(), x.std())',
            ],
          },
          {
            t: 'Probability and Distributions',
            en: 'Probability theory and the common distributions used in ML: Normal, Binomial and Poisson.',
            ur: 'Probability ka nazariya aur ML mein aam distributions: Normal, Binomial aur Poisson.',
          },
        ],
      },
      {
        n: 12,
        title: 'Hypothesis Testing and Correlation',
        topics: [
          {
            t: 'Hypothesis Testing',
            en: 'Run statistical tests to make data-driven decisions and validate assumptions.',
            ur: 'Statistical tests chala kar data ki bunyad par faislay karna aur assumptions ko parakhna.',
          },
          {
            t: 'Covariance and Correlation',
            en: 'Measure relationships and dependencies between variables.',
            ur: 'Variables ke darmiyan taalluq aur dependency napna.',
            code: ['print(df["hours"].corr(df["marks"]))'],
          },
        ],
      },
      {
        n: 13,
        title: 'Linear Algebra and Optimization',
        topics: [
          {
            t: 'Linear Algebra Basics',
            en: 'Vectors, matrices and the operations that power machine learning algorithms.',
            ur: 'Vectors, matrices aur un par operations jin par machine learning algorithms chalte hain.',
          },
          {
            t: 'Cost Functions and Gradients',
            en: 'Loss functions and gradient-based optimization: how models learn from their mistakes.',
            ur: 'Loss functions aur gradient-based optimization: model apni ghaltiyon se kaise seekhta hai.',
          },
        ],
      },
      {
        n: 14,
        title: 'Module 03 Projects',
        topics: [],
        projects: {
          class: [
            ['Company Sales Statistical Report', 'Analyze company sales data using descriptive statistics.', 'Descriptive statistics se company sales data ka tajzia.'],
            ['Correlation Study (Any Dataset)', 'Study variable relationships and correlations within a dataset.', 'Kisi bhi dataset mein variables ke taalluqat aur correlation ka mutala.'],
          ],
          home: [
            ['Hypothesis Testing Assignment', 'Apply statistical tests to real datasets to validate hypotheses.', 'Real datasets par statistical tests laga kar hypotheses check karein.'],
            ['Finance/Stock Statistical Exploration', 'Explore financial data using descriptive statistics and correlation analysis.', 'Descriptive statistics aur correlation se financial data explore karein.'],
          ],
        },
      },
    ],
  },
  {
    n: 4,
    slug: 'machine-learning',
    title: 'Machine Learning',
    range: [15, 21],
    intro: {
      en: 'From the ML pipeline to supervised and unsupervised algorithms, you learn to build, evaluate and compare models on real datasets.',
      ur: 'ML pipeline se le kar supervised aur unsupervised algorithms tak, aap real datasets par models banana, evaluate karna aur compare karna seekhte hain.',
    },
    weeks: [
      {
        n: 15,
        title: 'ML Pipeline, Feature Engineering and Preprocessing',
        topics: [
          {
            t: 'ML Pipeline',
            en: 'The end-to-end machine learning workflow from data collection to model deployment.',
            ur: 'Data jama karne se le kar model deploy karne tak machine learning ka poora workflow.',
          },
          {
            t: 'Feature Engineering',
            en: 'Create, transform and select meaningful features to improve model performance.',
            ur: 'Aise features banana, badalna aur chunna jo model ki performance behtar karein.',
          },
          {
            t: 'Data Preprocessing',
            en: 'Handle missing values, encode categorical variables and scale features for modeling.',
            ur: 'Missing values handle karna, categorical variables encode karna aur features ko scale karna.',
            code: [
              'from sklearn.preprocessing import StandardScaler, OneHotEncoder',
              'X_scaled = StandardScaler().fit_transform(X_num)',
            ],
          },
        ],
      },
      {
        n: 16,
        title: 'Train/Test Split and Linear Regression',
        topics: [
          {
            t: 'Train/Test Split and Cross Validation',
            en: 'Divide data to evaluate your model fairly and avoid overfitting.',
            ur: 'Data ko taqseem kar ke model ko insaaf se parakhna aur overfitting se bachna.',
            code: [
              'from sklearn.model_selection import train_test_split, cross_val_score',
              'X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)',
            ],
          },
          {
            t: 'Linear Regression',
            en: 'Predict continuous outcomes using a linear relationship between variables.',
            ur: 'Variables ke linear taalluq se continuous values (jaise price) predict karna.',
            code: [
              'from sklearn.linear_model import LinearRegression',
              'model = LinearRegression().fit(X_train, y_train)',
              'print(model.score(X_test, y_test))',
            ],
          },
        ],
      },
      {
        n: 17,
        title: 'Logistic Regression and Decision Trees',
        topics: [
          {
            t: 'Logistic Regression',
            en: 'Predict categorical outcomes and model probabilities.',
            ur: 'Categories (jaise yes/no) predict karna aur probabilities model karna.',
          },
          {
            t: 'Decision Trees',
            en: 'Tree-based models for classification and regression tasks.',
            ur: 'Classification aur regression ke liye tree-based models.',
          },
        ],
      },
      {
        n: 18,
        title: 'Random Forest and Gradient Boosting',
        topics: [
          {
            t: 'Random Forest',
            en: 'An ensemble of decision trees that improves accuracy and reduces overfitting.',
            ur: 'Bohat se decision trees ka ensemble jo accuracy barhata aur overfitting kam karta hai.',
          },
          {
            t: 'Gradient Boosting (XGBoost/LightGBM)',
            en: 'Advanced boosting algorithms for high-performance predictions.',
            ur: 'Boht tez aur taqatwar predictions ke liye advanced boosting algorithms.',
          },
        ],
      },
      {
        n: 19,
        title: 'KNN and SVM',
        topics: [
          {
            t: 'K-Nearest Neighbors (KNN)',
            en: 'Instance-based learning for classification and regression.',
            ur: 'Qareebi misaalon (neighbors) ki bunyad par classification aur regression.',
          },
          {
            t: 'Support Vector Machine (SVM)',
            en: 'Maximum-margin classifiers for complex datasets.',
            ur: 'Pechida datasets ke liye maximum-margin classifiers.',
          },
        ],
      },
      {
        n: 20,
        title: 'Unsupervised Learning: Clustering',
        topics: [
          {
            t: 'K-Means Clustering',
            en: 'Partition data into clusters based on similarity.',
            ur: 'Mushabihat ki bunyad par data ko clusters mein baantna.',
            code: [
              'from sklearn.cluster import KMeans',
              'labels = KMeans(n_clusters=3, n_init=10).fit_predict(X)',
            ],
          },
          {
            t: 'Hierarchical Clustering',
            en: 'Build a hierarchy of clusters with agglomerative or divisive methods.',
            ur: 'Agglomerative ya divisive tareeqon se clusters ka silsila (hierarchy) banana.',
          },
        ],
      },
      {
        n: 21,
        title: 'PCA and Module 04 Projects',
        topics: [
          {
            t: 'Principal Component Analysis (PCA)',
            en: 'Dimensionality reduction that simplifies data while keeping the key information.',
            ur: 'Dimensionality reduction: ahem maloomat rakhte hue data ko saada banana.',
          },
        ],
        projects: {
          class: [
            ['House Price Prediction', 'Predict housing prices using regression algorithms.', 'Regression algorithms se ghar ki qeemat predict karein.'],
            ['Customer Segmentation (K-Means)', 'Group customers into segments by behavior and characteristics.', 'Customers ko unke behavior ke mutabiq groups mein baantein.'],
            ['Loan Eligibility Prediction', 'Classify loan applicants as eligible or not using supervised learning.', 'Supervised learning se loan applicants ko eligible/not eligible classify karein.'],
            ['Fraud Detection Model', 'Detect fraudulent transactions using classification techniques.', 'Classification se fraud transactions pakadna.'],
          ],
          home: [
            ['Churn Prediction', 'Predict customer attrition using real-world datasets.', 'Real datasets se andaza lagayein ke kaun se customers chhor kar jayenge.'],
            ['Sales Forecasting', 'Forecast sales trends using machine learning models.', 'ML models se sales ka future trend predict karein.'],
            ['Credit Risk Scoring Model', "Assess clients' creditworthiness using predictive modeling.", 'Predictive modeling se clients ki credit worthiness check karein.'],
            ['HR Attrition Prediction', 'Predict employee turnover using historical HR data.', 'Purane HR data se employees ke job chhorne ka andaza lagayein.'],
          ],
        },
      },
    ],
  },
  {
    n: 5,
    slug: 'deep-learning',
    title: 'Deep Learning',
    range: [22, 26],
    intro: {
      en: 'Neural networks, computer vision and natural language processing: the technology behind image recognition, translation and chatbots.',
      ur: 'Neural networks, computer vision aur natural language processing: wo technology jo image recognition, translation aur chatbots ke peeche hai.',
    },
    weeks: [
      {
        n: 22,
        title: 'Neural Network Fundamentals',
        topics: [
          {
            t: 'Perceptron, Forward and Backpropagation',
            en: 'The basic unit of neural networks and how information flows forward and weights are updated backward during learning.',
            ur: 'Neural network ki buniyadi ikai aur seekhne ke dauran information aage kaise jati hai aur weights peeche kaise update hote hain.',
          },
          {
            t: 'Activation and Loss Functions',
            en: 'Functions that add non-linearity and measure prediction errors to optimize the model.',
            ur: 'Wo functions jo non-linearity lati hain aur prediction ki ghalti napti hain taake model behtar ho.',
          },
        ],
      },
      {
        n: 23,
        title: 'Computer Vision',
        topics: [
          {
            t: 'Convolutional Neural Networks (CNNs)',
            en: 'Neural networks specialized for image data and feature extraction.',
            ur: 'Images ke liye khaas neural networks jo features khud nikalte hain.',
          },
          {
            t: 'Transfer Learning',
            en: 'Reuse pre-trained models (e.g. ResNet, VGG) for new tasks to save time and improve performance.',
            ur: 'Pehle se trained models (jaise ResNet, VGG) ko naye kaam ke liye istemal kar ke waqt bachana.',
          },
        ],
      },
      {
        n: 24,
        title: 'NLP: Text Cleaning and Embeddings',
        topics: [
          {
            t: 'Text Cleaning',
            en: 'Preprocess textual data so models can use it.',
            ur: 'Text data ko model ke istemal ke qabil banane ke liye saaf karna.',
          },
          {
            t: 'Embeddings',
            en: 'Convert text into numerical vectors that capture semantic meaning. Embeddings are also the foundation of RAG, which you will build later.',
            ur: 'Text ko numbers (vectors) mein badalna jo matlab ko pakartay hain. Embeddings hi RAG ki buniyad hain jo aap aage banayenge.',
          },
        ],
      },
      {
        n: 25,
        title: 'Sequence Models: RNN, LSTM, GRU',
        topics: [
          {
            t: 'RNN, LSTM, GRU',
            en: 'Sequential models for handling time-series and text data effectively.',
            ur: 'Time-series aur text jaise sequence data ke liye models.',
          },
        ],
      },
      {
        n: 26,
        title: 'Module 05 Projects',
        topics: [],
        projects: {
          class: [
            ['CNN-Based Image Classifier', 'Classify images using convolutional neural networks.', 'CNN se images classify karein.'],
            ['LSTM Movie Review Sentiment Analyzer', 'Predict sentiment from movie reviews using LSTM networks.', 'LSTM se movie reviews ka sentiment (positive/negative) pehchanein.'],
            ['Transfer Learning (ResNet/VGG)', 'Apply pre-trained models to new image classification tasks.', 'Pre-trained models ko naye image classification kaam par lagayein.'],
          ],
          home: [
            ['Dogs vs Cats Classification', 'Build a model to classify dog and cat images.', 'Kutton aur billiyon ki tasveerein alag karne wala model banayein.'],
            ['Spam Detection using Deep Learning', 'Detect spam messages or emails using neural networks.', 'Neural networks se spam messages ya emails pakdein.'],
          ],
        },
      },
    ],
  },
  {
    n: 6,
    slug: 'mlops',
    title: 'MLOps',
    range: [27, 30],
    intro: {
      en: 'A model is only useful when people can use it. Learn to deploy, containerize, track and monitor machine learning systems.',
      ur: 'Model tab hi kaam ka hai jab log use istemal kar sakein. ML systems ko deploy, containerize, track aur monitor karna seekhein.',
    },
    weeks: [
      {
        n: 27,
        title: 'Deployment Concepts and FastAPI',
        topics: [
          {
            t: 'ML Deployment Concepts',
            en: 'How machine learning models are deployed into production environments.',
            ur: 'ML models ko production mein kaise deploy kiya jata hai.',
          },
          {
            t: 'FastAPI for ML Deployment',
            en: 'Build APIs that serve model predictions in real time.',
            ur: 'Aisi APIs banana jo real time mein model ki predictions dein.',
            code: [
              'from fastapi import FastAPI',
              'app = FastAPI()',
              '',
              '@app.post("/predict")',
              'def predict(x: float):',
              '    return {"prediction": model.predict([[x]])[0]}',
            ],
          },
        ],
      },
      {
        n: 28,
        title: 'Docker and MLflow',
        topics: [
          {
            t: 'Docker Containers',
            en: 'Containerize ML applications for consistent, scalable deployment.',
            ur: 'ML applications ko container mein band karna taake har jagah ek jaisi chalein.',
          },
          {
            t: 'MLflow for Tracking',
            en: 'Track experiments, metrics and models to manage the ML lifecycle.',
            ur: 'Experiments, metrics aur models ko track kar ke ML lifecycle manage karna.',
          },
        ],
      },
      {
        n: 29,
        title: 'CI/CD, Logging and Monitoring',
        topics: [
          {
            t: 'CI/CD Introduction',
            en: 'Continuous Integration and Continuous Deployment for ML pipelines.',
            ur: 'ML pipelines ke liye Continuous Integration aur Continuous Deployment ka taaruf.',
          },
          {
            t: 'Logging and Monitoring',
            en: 'Use logs and monitoring to track model performance in production.',
            ur: 'Logs aur monitoring se production mein model ki performance par nazar rakhna.',
          },
        ],
      },
      {
        n: 30,
        title: 'Module 06 Projects',
        topics: [],
        projects: {
          class: [
            ['Build and Deploy an ML Model with FastAPI', 'Create an API that serves predictions from a trained model.', 'Trained model ki predictions dene wali API banayein.'],
            ['MLflow Tracking Implementation', 'Track experiments, model metrics and versions with MLflow.', 'MLflow se experiments, metrics aur versions track karein.'],
          ],
          home: [
            ['Dockerized ML Microservice', 'Package a machine learning model as a Docker container.', 'ML model ko Docker container ke taur par package karein.'],
            ['Full Deployment Pipeline with Monitoring', 'Build an end-to-end ML pipeline with deployment and monitoring.', 'Deployment aur monitoring ke sath poori ML pipeline banayein.'],
          ],
        },
      },
    ],
  },
  {
    n: 7,
    slug: 'big-data-and-cloud',
    title: 'Big Data and Cloud',
    range: [31, 34],
    intro: {
      en: 'When data no longer fits on one machine you need distributed tools. Learn Hadoop, Spark and the basics of cloud platforms (AWS or Azure).',
      ur: 'Jab data ek machine mein na samaye to distributed tools chahiye hote hain. Hadoop, Spark aur cloud platforms (AWS ya Azure) ke basics seekhein.',
    },
    weeks: [
      {
        n: 31,
        title: 'Big Data and Hadoop',
        topics: [
          {
            t: 'Hadoop Concepts',
            en: 'Introduction to the Hadoop framework for distributed storage and processing.',
            ur: 'Distributed storage aur processing ke liye Hadoop framework ka taaruf.',
          },
          {
            t: 'HDFS, MapReduce, YARN',
            en: "Hadoop's storage (HDFS), processing (MapReduce) and resource management (YARN) components.",
            ur: 'Hadoop ke hisse: storage (HDFS), processing (MapReduce) aur resource management (YARN).',
          },
        ],
      },
      {
        n: 32,
        title: 'Apache Spark',
        topics: [
          {
            t: 'RDDs',
            en: 'Resilient Distributed Datasets for fault-tolerant, parallel data processing.',
            ur: 'Resilient Distributed Datasets: ghalti bardasht karne wali parallel processing.',
          },
          {
            t: 'DataFrames and Spark SQL',
            en: 'Work with structured data using Spark DataFrames and query it with SQL-like operations.',
            ur: 'Spark DataFrames se structured data par kaam karna aur SQL jaisi queries chalana.',
            code: [
              'from pyspark.sql import SparkSession',
              'spark = SparkSession.builder.appName("demo").getOrCreate()',
              'df = spark.read.csv("sales.csv", header=True, inferSchema=True)',
              'df.groupBy("city").sum("amount").show()',
            ],
          },
          {
            t: 'Spark MLlib',
            en: "Apply scalable machine learning algorithms with Spark's MLlib library.",
            ur: "Spark ki MLlib library se bade data par ML algorithms chalana.",
          },
        ],
      },
      {
        n: 33,
        title: 'Cloud (AWS or Azure)',
        topics: [
          {
            t: 'S3 Storage and EC2 Basics',
            en: 'Object storage for scalable data management and virtual servers for compute in the cloud.',
            ur: 'Cloud mein bade data ke liye object storage (S3) aur compute ke liye virtual servers (EC2).',
          },
          {
            t: 'Databricks / EMR',
            en: 'Cloud-based platforms for Spark and Hadoop workloads.',
            ur: 'Spark aur Hadoop ke kaam ke liye cloud platforms.',
          },
          {
            t: 'Deploying ML Models on Cloud',
            en: 'Deploy machine learning models on cloud infrastructure.',
            ur: 'ML models ko cloud infrastructure par deploy karna.',
          },
        ],
      },
      {
        n: 34,
        title: 'Module 07 Projects',
        topics: [],
        projects: {
          class: [
            ['ETL Pipeline using PySpark', 'Build end-to-end data pipelines for extraction, transformation and loading.', 'Extract, transform aur load karne wali poori data pipeline banayein.'],
            ['Spark MLlib Model Training', 'Train and evaluate machine learning models using Spark MLlib.', 'Spark MLlib se ML models train aur evaluate karein.'],
            ['Cloud-Based Data Processing Workflow', 'Implement scalable data workflows on cloud platforms.', 'Cloud par scalable data workflows banayein.'],
          ],
          home: [
            ['Big Data Batch Processing', 'Perform batch data processing using Big Data tools.', 'Big Data tools se batch processing karein.'],
            ['Cloud-Based Data Lake Setup', 'Set up and manage a cloud-based data lake for large datasets.', 'Bade datasets ke liye cloud data lake set up aur manage karein.'],
            ['Real-Time Processing Mini Project (Optional)', 'Explore real-time data processing techniques.', 'Real-time data processing ke tareeqe explore karein (optional).'],
          ],
        },
      },
    ],
  },
  {
    n: 8,
    slug: 'generative-ai-llms',
    title: 'Generative AI (LLMs)',
    range: [35, 38],
    intro: {
      en: 'Understand how large language models work and build with them: prompting, fine-tuning, RAG and vector databases. This is the module this very book\'s AI tutor is built on.',
      ur: 'Large language models kaise kaam karte hain samjhein aur un ke sath banayein: prompting, fine-tuning, RAG aur vector databases. Is book ka AI tutor isi module ki technology par bana hai.',
    },
    weeks: [
      {
        n: 35,
        title: 'Transformers',
        topics: [
          {
            t: 'Transformers',
            en: 'The core architecture behind modern language models: attention lets a model weigh which words matter most.',
            ur: 'Jadeed language models ka buniyadi structure: attention model ko batata hai ke kaun se alfaaz zyada ahem hain.',
          },
        ],
      },
      {
        n: 36,
        title: 'BERT, GPT and Tokenization',
        topics: [
          {
            t: 'BERT and GPT (Conceptual Understanding)',
            en: 'The principles behind popular NLP models: BERT reads text in both directions, GPT generates text one token at a time.',
            ur: 'Mashhoor NLP models ke usool: BERT text ko dono taraf se parhta hai, GPT ek ek token karke text likhta hai.',
          },
          {
            t: 'Tokenization',
            en: 'Break text into tokens so a model can process and understand it.',
            ur: 'Text ko tokens mein todna taake model use samajh sake.',
          },
        ],
      },
      {
        n: 37,
        title: 'Prompting, Fine-Tuning, RAG and Vector Databases',
        topics: [
          {
            t: 'Prompt Engineering',
            en: 'Craft clear, specific prompts (with context, examples and format instructions) to guide LLM responses.',
            ur: 'Saaf aur wazeh prompts likhna (context, examples aur format ke sath) taake LLM behtar jawab de.',
          },
          {
            t: 'Fine-Tuning (LoRA/QLoRA)',
            en: 'Adapt pre-trained models to specific tasks with lightweight fine-tuning techniques.',
            ur: 'Halki fine-tuning techniques se pehle se trained models ko khaas kaam ke liye dhalna.',
          },
          {
            t: 'RAG Systems',
            en: 'Retrieval-Augmented Generation: find the most relevant pieces of your documents, then give them to the LLM so its answers are grounded in your content.',
            ur: 'Retrieval-Augmented Generation: pehle apne documents mein se sab se munasib hissay dhoondna, phir LLM ko dena taake jawab aapke content par mabni ho.',
            code: [
              '# RAG in 4 steps',
              '# 1. Split documents into chunks',
              '# 2. Turn each chunk into an embedding (vector) and store it',
              '# 3. For a question: embed it and fetch the closest chunks',
              '# 4. Send question + chunks to the LLM to write the answer',
            ],
          },
          {
            t: 'Vector Databases (FAISS/Pinecone)',
            en: 'Store and search embeddings efficiently for semantic retrieval. This book uses Qdrant, another popular vector database.',
            ur: 'Embeddings ko store aur search karna taake matlab ke lihaz se jawab milein. Ye book Qdrant istemal karti hai, jo aik aur mashhoor vector database hai.',
          },
        ],
      },
      {
        n: 38,
        title: 'Module 08 Projects',
        topics: [],
        projects: {
          class: [
            ['ChatGPT-style Q/A Bot', 'Build an interactive question-answering chatbot.', 'Sawal jawab karne wala interactive chatbot banayein.'],
            ['RAG System with Vector Database', 'Develop a retrieval-augmented system using vector search.', 'Vector search se RAG system banayein.'],
          ],
          home: [
            ['Domain-Fine-Tuned Q/A LLM', 'Fine-tune an LLM for specialized domain knowledge.', 'Kisi khaas field ke liye LLM ko fine-tune karein.'],
            ['Text Summarization or Content Generator', 'Create AI tools for summarizing or generating text content.', 'Text ka khulasa ya naya content banane wale AI tools banayein.'],
          ],
        },
      },
    ],
  },
  {
    n: 9,
    slug: 'agentic-ai',
    title: 'Agentic AI',
    range: [39, 41],
    intro: {
      en: 'AI agents do not just answer: they plan, use tools, remember and collaborate. Build autonomous and multi-agent systems.',
      ur: 'AI agents sirf jawab nahi dete: wo plan karte hain, tools istemal karte hain, yaad rakhte hain aur mil kar kaam karte hain. Autonomous aur multi-agent systems banayein.',
    },
    weeks: [
      {
        n: 39,
        title: 'AI Agents and Tool Use',
        topics: [
          {
            t: 'What are AI Agents?',
            en: 'An introduction to autonomous AI agents and their capabilities.',
            ur: 'Khud mukhtar AI agents aur un ki salahiyaton ka taaruf.',
          },
          {
            t: 'Tool-Using Agents',
            en: 'How agents interact with external tools (search, code, APIs) to get tasks done.',
            ur: 'Agents kaam poora karne ke liye bahari tools (search, code, APIs) kaise istemal karte hain.',
          },
        ],
      },
      {
        n: 40,
        title: 'Reasoning, LangChain, CrewAI, AutoGen and Memory',
        topics: [
          {
            t: 'Reasoning and Planning',
            en: 'Implement logic, decision-making and multi-step task planning.',
            ur: 'Logic, faislay aur kai marhalon wale kaam ki planning.',
          },
          {
            t: 'LangChain Agents',
            en: 'Build intelligent agents using the LangChain framework.',
            ur: 'LangChain framework se zaheen agents banana.',
          },
          {
            t: 'CrewAI and AutoGen',
            en: 'Multi-agent orchestration platforms for complex workflows.',
            ur: 'Pechida workflows ke liye multi-agent orchestration platforms.',
          },
          {
            t: 'Memory-Enabled Agents',
            en: 'Let agents store and recall context for smarter interactions.',
            ur: 'Agents ko context yaad rakhna sikhana taake wo zyada samajhdari se baat karein.',
          },
        ],
      },
      {
        n: 41,
        title: 'Multi-Agent Systems and Module 09 Projects',
        topics: [
          {
            t: 'Multi-Agent Systems',
            en: 'Coordinate multiple AI agents to solve collaborative tasks.',
            ur: 'Kai AI agents ko ikhatta kar ke mil jul kar kaam hal karwana.',
          },
        ],
        projects: {
          class: [
            ['AI Autonomous Data Analyst', 'Build an AI agent that analyzes and reports on data automatically.', 'Aisa AI agent jo data ka khud tajzia kar ke report banaye.'],
            ['Multi-Agent System (Researcher + Writer + Reviewer)', 'Develop a collaborative AI system with specialized agent roles.', 'Alag alag kirdar wale agents ka collaborative AI system.'],
          ],
          home: [
            ['Personal AI Assistant with Tools', 'Create a custom AI assistant capable of executing tasks.', 'Tools ke sath apna personal AI assistant banayein jo kaam kar sake.'],
            ['Automated Email + Reporting Agent System', 'Automate communication and reporting using AI agents.', 'AI agents se emails aur reporting automate karein.'],
          ],
        },
      },
    ],
  },
];

export const extras = [
  ['LinkedIn Profile Optimization', 'LinkedIn profile optimize karna'],
  ['Personal Branding', 'Personal branding'],
  ['MS Office', 'MS Office'],
  ['Google Docs/Slides/Sheets', 'Google Docs/Slides/Sheets'],
  ['Canva', 'Canva'],
  ['Presentations after each Module', 'Har module ke baad presentations'],
  ['Freelancing (Upwork/Freelancer)', 'Freelancing (Upwork/Freelancer)'],
];
