-- phpMyAdmin SQL Dump
-- version 4.5.1
-- http://www.phpmyadmin.net
--
-- Host: 127.0.0.1
-- Generation Time: Sep 03, 2016 at 10:19 AM
-- Server version: 10.1.9-MariaDB
-- PHP Version: 5.5.30

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `tutordesk`
--

-- --------------------------------------------------------

--
-- Table structure for table `batch`
--

CREATE TABLE `batch` (
  `id` int(5) NOT NULL,
  `title` varchar(255) NOT NULL,
  `course_id` int(11) NOT NULL,
  `start_date` date NOT NULL,
  `end_date` date NOT NULL,
  `status` enum('Started','Completed','Starting','') NOT NULL,
  `frequency` varchar(45) NOT NULL,
  `start_time` time NOT NULL,
  `end_time` time NOT NULL,
  `duration` int(11) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `batch`
--

INSERT INTO `batch` (`id`, `title`, `course_id`, `start_date`, `end_date`, `status`, `frequency`, `start_time`, `end_time`, `duration`, `createdAt`, `updatedAt`) VALUES
(1, 'MongoDB - 11 Sep 2015', 5, '2015-09-12', '2019-09-13', 'Completed', 'weekend', '09:30:00', '17:30:00', 8, '2016-08-15 16:16:17', '2016-08-15 16:16:17'),
(2, 'JOB Support Biological', 8, '2015-09-07', '2015-10-07', 'Completed', 'weekdays', '21:30:00', '22:30:00', 1, '2016-08-15 16:24:16', '2016-08-16 18:46:49'),
(3, 'Angular JS -15 Sept 2015', 6, '2015-09-15', '2015-10-30', 'Completed', 'weekend', '15:00:00', '17:00:00', 2, '2016-08-15 16:39:51', '2016-08-15 16:39:51'),
(4, 'Angular JS -18 Oct 2015', 6, '2015-10-18', '2015-11-18', 'Completed', 'weekend', '10:00:00', '12:00:00', 2, '2016-08-15 17:27:58', '2016-08-15 17:27:58'),
(5, 'Job Support - 7 Sep 2015', 8, '2015-09-07', '2015-10-07', 'Completed', 'weekdays', '07:30:00', '09:30:00', 2, '2016-08-15 17:29:56', '2016-08-15 17:29:56'),
(6, 'JOB Support - 12 Dec 2015', 8, '2015-12-12', '2016-01-12', 'Completed', 'weekdays', '07:00:00', '08:30:00', 1, '2016-08-15 17:48:22', '2016-08-15 17:48:22'),
(7, 'Angular JS - 12 Mar 2016', 6, '2016-03-12', '2016-04-17', 'Completed', 'weekend', '14:00:00', '16:00:00', 2, '2016-08-15 18:06:16', '2016-08-15 18:06:16'),
(8, 'MEAN Stack - 02 Mar 2016', 1, '2016-03-02', '2016-04-15', 'Completed', 'weekend', '10:00:00', '12:00:00', 2, '2016-08-15 18:14:49', '2016-08-15 18:14:49'),
(9, 'JOB Support - 02 Mar 2016', 8, '2016-03-02', '2016-09-02', 'Started', 'weekdays', '07:00:00', '09:00:00', 2, '2016-08-15 18:23:30', '2016-08-15 18:23:30'),
(10, 'JavaScript Basic - 02 Oct 2015', 2, '2015-10-02', '2015-10-30', 'Completed', 'weekend', '14:00:00', '16:00:00', 2, '2016-08-15 18:45:31', '2016-08-15 18:45:31');

-- --------------------------------------------------------

--
-- Table structure for table `courses`
--

CREATE TABLE `courses` (
  `course_id` int(11) NOT NULL,
  `course_name` varchar(100) NOT NULL,
  `course_code` varchar(50) NOT NULL,
  `course_alias` varchar(35) NOT NULL,
  `avg_rating` int(11) NOT NULL,
  `review_count` int(11) NOT NULL,
  `total_student` int(11) NOT NULL,
  `image` varchar(255) NOT NULL,
  `course_overview` text NOT NULL,
  `course_curriculam` text NOT NULL,
  `duration` int(11) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `is_status` tinyint(1) NOT NULL DEFAULT '1'
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `courses`
--

INSERT INTO `courses` (`course_id`, `course_name`, `course_code`, `course_alias`, `avg_rating`, `review_count`, `total_student`, `image`, `course_overview`, `course_curriculam`, `duration`, `createdAt`, `updatedAt`, `is_status`) VALUES
(1, 'MEAN Stack', 'MEANL1', 'MEAN Stack Level 1', 0, 0, 0, 'nodejs.png', '<h3><strong>Course Description</strong></h3>\n\n<p>This AngularJS training course from Infinite Skills teaches you all about this open-source JavaScript framework. This course is designed for the absolute beginner, meaning no prior knowledge of AngularJS is required, however you should already have a fundamental understanding of HTML, CSS and JavaScript.</p>\n\n<p><br />\nYou will start by setting up the application and learning about the views, controllers, and built-in directions. From there, the course will teach you about filters, showing you tricks with filters and how to create custom filters. This video tutorial will cover topics in AngularJS including service types, directives and directive communication channels, routing and promises, and advanced scope. Finally, you will learn about interacting with servers and 3rd party libraries.<br />\n<br />\nBy the completion of this computer based training course, you will have gained the knowledge and experience necessary for working with the AngularJS framework. Working files are included, allowing you to follow along with the author throughout the lessons.</p>\n\n<h3><strong>What are the requirements?</strong></h3>\n\n<ul>\n	<li>A willingness to learn cool stuff</li>\n</ul>\n\n<h3><strong>What am I going to get from this course?</strong></h3>\n\n<ul>\n	<li>Learn everything you need to know about the AngularJS framework</li>\n</ul>\n\n<h3><strong>What is the target audience?</strong></h3>\n\n<ul>\n	<li>Web Designers and Developers</li>\n</ul>\n\n<h3><strong>What you get with this course?</strong></h3>\n', '<p>Curriculum Section 1: Creating web servers with Node.js and Express Lecture 1 Introduction Preview 10:07 Lecture 2 Useful links for a MEAN stack hero Preview Article Lecture 3 Node.js - First steps 07:22 Lecture 4 Node.js - require and module.exports 18:10 Lecture 5 Node.js - asynchronous non-blocking code 16:47 Lecture 6 Node.js - using npm for dependency management 17:01 Lecture 7 Express - setting up Express to listen for requests 09:08 Lecture 8 Express - routing: defining URL routes and sending response 13:51 Lecture 9 Express - serving static files 09:56 Lecture 10 Express - exploring Middleware 07:36 Lecture 11 Express - using the Express router 09:50 Lecture 12 Express - using controllers to define functionality 12:26 Lecture 13 Express - defining dynamic routes with URL parameters 06:51 Lecture 14 Express - working with querystrings and posted form data 13:32 Lecture 15 BONUS: Improving MEAN development workflow with Nodemon 08:05 Section 2: Working with MongoDB and NoSQL Lecture 16 Introduction to NoSQL databases 11:25 Lecture 17 MongoDB: the basics 06:32 Lecture 18 MongoDB - Getting started with the Mongo shell 12:21 Lecture 19 MongoDB - Interacting with data from the command line (Mongo shell) 14:58 Lecture 20 MongoDB - Importing and exporting data 17:36 Lecture 21 MongoDB - Connecting to a Node.js application 16:30 Lecture 22 MongoDB - Querying the database from Node.js 14:37 Lecture 23 MongoDB - Creating documents from Node.js 11:20 Section 3: Build robust REST APIs using Node.js, Express and MongoDB Lecture 24 Introduction to REST APIs 11:07 Lecture 25 Using Mongoose to manage MongoDB database connections in Node 15:02 Lecture 26 APIs - Defining data structure with Mongoose schemas and models 15:10 Lecture 27 APIs - Defining complex data structures with Mongoose schemas 10:42 Lecture 28 APIs - Creating GET routes using Mongoose queries 09:52 Lecture 29 APIs - Creating GET routes for subdocuments using Mongoose 18:09 Lecture 30 APIs - Finding documents based on geo-coordinates 14:03 Lecture 31 APIs - Error trapping and hardening a REST API 18:29 Lecture 32 APIs - Creating new documents in MongoDB using Mongoose and POST methods 23:17 Lecture 33 APIs - Updating existing documents in MongoDB 13:59 Lecture 34 APIs - Using Mongoose to delete data from MongoDB 11:50 Section 4: Single Page Applications with AngularJS, the right way Lecture 35 AngularJS - Expressions and Data-Binding 07:31 Lecture 36 AngularJS - Built-in Directives 27:07 Lecture 37 AngularJS - Built-in Filters 15:43 Lecture 38 AngularJS - Controllers, $scope and controllerAs 12:24 Lecture 39 AngularJS - Modules 05:20 Lecture 40 AngularJS - Single Page Apps, Routes, Templates 14:17 Lecture 41 AngularJS - Built-in Services, Application Architecture 17:35 Lecture 42 AngularJS - Custom Services, Service vs Factory 09:45 Lecture 43 AngularJS - Custom Filters 10:56 Lecture 44 AngularJS - Building the SPA - part 1 12:29 Lecture 45 AngularJS - Building the SPA - part 2 08:39 Lecture 46 AngularJS - Building the SPA - part 3 11:50 Lecture 47 AngularJS - Building the SPA - part 4 12:58 Lecture 48 AngularJS - Building the SPA - The final part 20:03 Section 5: Adding authentication to the MEAN stack Lecture 49 Authentication - Securing the backend 16:59 Lecture 50 Authentication - Adding JWT to the application 15:04 Lecture 51 Authentication - Adding authentication to AngularJS 06:51 Lecture 52 Authentication - AngularJS and JWT 32:09 Lecture 53 Authentication - Tying all the pieces together 08:45</p>\n', 30, '2016-08-15 07:33:09', '2016-08-31 20:59:48', 1),
(2, 'JavaScript Basic', 'JSL1', 'Javascript basic level one', 0, 0, 0, '', 'Course Description\r\nJavaScript is one of the most popular programming languages in the world because it''s easy to learn, and it can do amazing things. If you''re interested in web development, it''s also a language that you simply must learn to be effective.\r\n\r\nThis course is aimed at complete beginners, but is great for those who need a brush up on their JavaScript skills.\r\n\r\nYou will learn the very basics of JavaScript programming, then move on to more complex programming skills. Along the way, you''ll have projects to create using the skills you''ve learned in this course.\r\n\r\nSource codes are included in the course materials.\r\n\r\nFull details\r\nWhat are the requirements?\r\nA computer\r\nWhat am I going to get from this course?\r\nStart programming with JavaScript\r\nCreate real life projects with JavaScript\r\nWhat is the target audience?\r\nBeginning web developers\r\nDevelopers who need a JavaScript refresher', 'Curriculum\r\nSection 1: Introduction to JavaScript\r\nLecture 1	\r\nIntroduction to JavaScript \r\nPreview\r\n05:55\r\nLecture 2	\r\nScript Tags \r\nPreview\r\n13:00\r\nLecture 3	\r\nBoxes \r\n07:56\r\nLecture 4	\r\nConsole \r\n07:56\r\nLecture 5	\r\nVariables \r\n13:16\r\nLecture 6	\r\nUndefined, typeof, NaN \r\n09:13\r\nLecture 7	\r\nConcatination \r\n05:59\r\nLecture 8	\r\nComparison Operators \r\n05:10\r\nLecture 9	\r\nLogical Operators \r\n06:56\r\nLecture 10	\r\nMathematical Operators \r\n10:01\r\nLecture 11	\r\nCommenting \r\n05:39\r\nSection 2: Intermediate JavaScript\r\nLecture 12	\r\nArrays \r\n12:43\r\nLecture 13	\r\nArray Prototype \r\n03:45\r\nLecture 14	\r\nLooping Over Arrays \r\n05:54\r\nLecture 15	\r\nIntroduction to Objects \r\n08:01\r\nLecture 16	\r\nCreating an Object \r\n09:24\r\nLecture 17	\r\nDates and Times \r\n03:57\r\nLecture 18	\r\nIntervals \r\n10:39\r\nLecture 19	\r\nCountdown: Example Application \r\n19:19\r\nLecture 20	\r\nCallbacks \r\n10:11\r\nLecture 21	\r\nCallback in Countdown \r\n03:14\r\nSection 3: Working with JavaScript Elements\r\nLecture 22	\r\nDOM Elements \r\n13:41\r\nLecture 23	\r\nQuery Selector \r\n15:46\r\nLecture 24	\r\nEvent Handlers \r\n13:22\r\nLecture 25	\r\nInput Fields \r\n07:41\r\nLecture 26	\r\nCreating Elements \r\n07:00\r\nLecture 27	\r\nStyling Elements \r\n10:21\r\nSection 4: Bonus JavaScript Tips\r\nLecture 28	\r\nLinting \r\n11:39\r\nLecture 29	\r\nMinification \r\n05:54\r\nSection 5: Conclusion\r\nLecture 30	\r\nConclusion \r\n00:13\r\nLecture 31	\r\nRequest a Course\r\nArticle', 0, '2016-08-15 07:34:55', '2016-08-15 07:34:55', 1),
(3, 'Javascript Advance', 'JSL2', 'Javascript Advance', 0, 0, 0, '', 'Course Description\r\nIn only three hours you will learn enough javascript to transform from a junior javascript developer into a senior javascript guru.\r\n\r\nYou will dramatically improve your chances of getting past a technical interview, landing that dream job and earning more money.\r\n\r\nIf you are like me you learnt Javascript by just muddling along, seeing what works and learning a thing or two everyday.\r\n\r\nHowever without a grasp of the deeper fundamentals you will hit quite a few head scratch-y issues, introduce bugs, find it hard to read and understand framework and library code and won’t be considered a senior developer.\r\n\r\nThis unique course teaches you advanced javascript knowledge through a series of 20 interview questions, with regular quiz''s on the way through to cement your knowledge.\r\n\r\n***This course covers ES5 version of javascript, the only officially supported version in all browsers***\r\n\r\nWhat are you going to learn?\r\n\r\nTypes & Equality: The different types in JS and how to check if two values are really equal?\r\nScopes: The different scopes a variable can be declared in and how to manipulate those scopes.\r\nObject Orientation: How to perform OO in Javascript with both the Prototype Pattern and the Pseudo-Classical/Constructor Pattern.\r\nAdvanced topics in Networking such as CORS and JSONP.\r\nAdvanced topics in Event Handling such as the different event phases.\r\nWhy an interview format?\r\n\r\nI find that it''s only when i''m facing an upcoming interview that I get into gear and really make sure I have a deep understanding of what I claim to know.\r\n\r\nI might know the best practice for how to solve a problem, but do I know why?\r\n\r\nJavascript interviews are designed to dig deeper into your knowledge of a subject, see if you are just mimicking what you have read or if you have a proper understanding.\r\n\r\nAlso it''s FUN, what''s more satisfying than learning something, then passing a test!\r\n\r\nFull details\r\nWhat are the requirements?\r\nA basic understanding of Javascript (ES5)\r\nWhat am I going to get from this course?\r\nImpress interviewers with knowledge about fundamental javascript features\r\nConfidently Interview other Javascript candidates\r\nPass stage one javascript telephone interviews\r\nWhat is the target audience?\r\nAny javascript developer looking to change jobs and isn''t looking forward to the interviews\r\nDevs who have not done javascript in a while, are a bit rusty, and just want to freshen up on the essentials.\r\nBoth experienced and novice developers\r\nJust about to enter the job market after a career change\r\nNew grads coming out of university\r\nFull details', 'Curriculum\r\nSection 1: Introduction\r\nLecture 1	\r\nWelcome\r\nPreview\r\n04:33\r\nLecture 2	\r\nHow to edit and run code in Chrome?\r\nPreview\r\n01:37\r\nSection 2: Basics\r\nLecture 3	\r\n1. What is "use strict" and what does it do?\r\nPreview\r\n09:49\r\nLecture 4	\r\n2. Does javascript pass variables by reference or by value?\r\nPreview\r\n04:58\r\nQuiz 1	\r\nQuiz 1\r\n3 questions\r\nSection 3: Types & Equality\r\nLecture 5	\r\n3. What are the different types in javascript?\r\nPreview\r\n09:27\r\nLecture 6	\r\n4. What is the difference between == and ===?\r\n06:37\r\nLecture 7	\r\n5. What is NaN and how can we check for it?\r\n05:25\r\nQuiz 2	\r\nQuiz 2\r\n4 questions\r\nSection 4: Scopes\r\nLecture 8	\r\n6. What are the different scopes in javascript?\r\n03:56\r\nLecture 9	\r\n7. What is variable hoisting?\r\n04:41\r\nLecture 10	\r\n8. What is the scope chain?\r\n04:08\r\nLecture 11	\r\n9. What is an IIFE and why might you use it?\r\n06:02\r\nLecture 12	\r\n10. What are function closures?\r\n12:09\r\nQuiz 3	\r\nQuizz 3\r\n10 questions\r\nLecture 13	\r\nQuick Question\r\n02:06\r\nSection 5: Object Orientation\r\nLecture 14	\r\n11. What does the this keyword mean?\r\nPreview\r\n13:11\r\nLecture 15	\r\n12. What do the functions call, bind and apply do?\r\n20:19\r\nLecture 16	\r\n13. What is the prototype chain?\r\n11:41\r\nLecture 17	\r\n14. What is the difference between prototypal and classical inheritance?\r\n03:07\r\nQuiz 4	\r\nQuiz 4\r\n10 questions\r\nLecture 18	\r\n15. What is the Constructor OO pattern? (part 1)\r\n19:46\r\nLecture 19	\r\n15. What is the Constructor OO pattern? (part 2)\r\n12:22\r\nLecture 20	\r\n16. What is the Prototype OO pattern?\r\n15:50\r\nQuiz 5	\r\nQuiz 5\r\n7 questions\r\nSection 6: Networking\r\nLecture 21	\r\n17. What is CORS? \r\n17:55\r\nLecture 22	\r\n18. What is JSONP?\r\n11:50\r\nQuiz 6	\r\nQuiz 6\r\n5 questions\r\nSection 7: Events\r\nLecture 23	\r\n19. What is the difference between event capturing and bubbling?\r\n08:13\r\nLecture 24	\r\n20. What is the difference between stopPropagation and preventDefault?\r\n05:13\r\nQuiz 7	\r\nQuiz 7\r\n5 questions\r\nSection 8: Bonus\r\nLecture 25	\r\nTopic Request Form \r\nArticle\r\nLecture 26	\r\nBonus Lecture\r\nArticle', 0, '2016-08-15 07:35:40', '2016-08-16 18:27:29', 1),
(4, 'MongoDB Basic', 'MONGOL1', 'Mongo Database Basic', 0, 0, 0, '', 'Course Description\r\n*************************Course Updated on July 4,2016 **************************\r\n\r\nThis course will help you to master one of the most popular NoSQL databases MongoDB. This course is designed to provide knowledge and hands on skills to become a successful MongoDB expert.\r\n\r\nUpdated on July 4, 2016: Section 15: Project 1 - Working with node.js and MongoDB\r\n\r\nUpdated on July 4, 2016: Lecture 5 Installing MongoDB Latest Version 3.2.7\r\n\r\nWe will start with basics of MongoDB and then we go on learning advance concepts to build MongoDB based applications.\r\n\r\nIn this course, we will start by learning basic concepts of MongoDB, MongoDB installation process on different operating systems, creating databases, Collections, CRUD opertaions and Indexing.\r\n\r\nYou can use the exercise files attached along this course to practice and follow along the each section/chapter. There will be short quizzes after each section to test our understanding and also to revise the concepts.\r\n\r\nAt the end of this course you will be mastering MongoDB based application development.\r\n\r\nCourse Highlights\r\n\r\nMost comprehensive course on MongoDB with NoSQL database design approach\r\nSimple, easy and well explained lectures with practical examples\r\nQuizzes at end of the each section to test your understanding\r\nExercise files to help you start practicing along the course\r\nMore Lectures and projects will be added in coming weeks\r\nCourse Objective\r\n\r\nMastering MongoDB based application development\r\nDecide where and when to use MongoDB in your application development\r\nDesign MongoDB database from start to finish\r\nDifferentiate between RDBMS and NoSQL databases\r\nSpot key features and advantages of NoSQL database MongoDB over RDBMS databases\r\nFull details\r\nWhat are the requirements?\r\nNothing about MongoDB, we will start for scratch.\r\nBasic knowledge of database management systems\r\nBasic knowledge of Windows\r\nWhat am I going to get from this course?\r\nMastering MongoDB based application development\r\nDecide where and when to use MongoDB in your application development\r\nDesign MongoDB database from start to finish\r\nDifferentiate between RDBMS and NoSQL databases\r\nSpot key features and advantages of NoSQL database MongoDB over RDBMS databases\r\nFull details\r\nWhat is the target audience?\r\nAnyone can learn it as this course starts from scratch\r\nThis course "Learn MongoDB - Leading NoSQL Database from scratch" is developed for all the Developers who want to learn and develop MongoDB based applications.\r\nThis course is designed for DBAs who wants to learn about NoSQL Database design with MongoDB.', 'Curriculum\r\nSection 1: Course Objectives - An Introduction\r\nLecture 1	\r\nCourse Objectives - An Introduction To The Course\r\nPreview\r\n02:00\r\nSection 2: Introduction to NoSQL Database\r\nLecture 2	\r\nIntroduction to NoSQL Databases \r\n03:58\r\nLecture 3	\r\nIntroduction to MongoDB \r\n04:32\r\nLecture 4	\r\nDifference between MongoDB & RDBMS \r\n03:05\r\nQuiz 1	\r\nQuiz on Introduction to NoSQL database\r\n4 questions\r\nSection 3: Getting Started - Installation & Configuration\r\nLecture 5	\r\nInstalling MongoDB Latest Version 3.2.7\r\n07:35\r\nLecture 6	\r\nInstalling MongoDB Version 3.0.6 on Windows \r\n08:21\r\nLecture 7	\r\nConfiguring MongoDB server with configuration file \r\n04:42\r\nLecture 8	\r\nInstalling MongoDB on Mac OS X \r\n4 pages\r\nQuiz 2	\r\nQuiz on Installation & Configuration\r\n3 questions\r\nSection 4: Basics of MongoDB\r\nLecture 9	\r\nCreating First Database \r\n04:07\r\nLecture 10	\r\nCreating Document and Saving it to Collection \r\n03:37\r\nLecture 11	\r\nExercise\r\n1 page\r\nLecture 12	\r\nDropping a Database \r\nPreview\r\n01:34\r\nLecture 13	\r\nCreating a Collection - Using db.createCollection(name,options)\r\n04:15\r\nLecture 14	\r\nDropping a Collection\r\n02:15\r\nQuiz 3	\r\nQuiz on Basics of MongoDB\r\n3 questions\r\nSection 5: MongoDB CRUD Operations - Create, Read, Update and Delete\r\nLecture 15	\r\nCreating/Inserting a document in collection using javascript file\r\n03:08\r\nLecture 16	\r\nInserting Array of Documents\r\n02:35\r\nLecture 17	\r\nExercise\r\n4 pages\r\nLecture 18	\r\nReading a Document - Querying\r\n04:39\r\nLecture 19	\r\nReading a Document with $lt, $gt operator\r\n02:29\r\nLecture 20	\r\nOther Query Operators\r\nPreview\r\n08:36\r\nLecture 21	\r\nUpdating Documents\r\n07:18\r\nLecture 22	\r\nDeleting documents\r\n08:17\r\nQuiz 4	\r\nQuiz on CRUD operations \r\n6 questions\r\nSection 6: Performance tuning with Indexes in MongoDB\r\nLecture 23	\r\nIntroduction to Indexes\r\n03:40\r\nLecture 24	\r\nUnderstanding Impact of Indexes\r\n05:28\r\nLecture 25	\r\nCreating Index\r\n03:32\r\nLecture 26	\r\nFinding Indexes\r\n01:47\r\nLecture 27	\r\nDropping Index\r\n01:13\r\nQuiz 5	\r\nQuiz on Index in MongoDB\r\n5 questions\r\nSection 7: ObjectIds in MongoDB\r\nLecture 28	\r\nSection Overview\r\nPreview\r\n01:11\r\nLecture 29	\r\nUnderstanding ObjectIds\r\nPreview\r\n03:06\r\nLecture 30	\r\nCreating ObjectIds\r\n02:55\r\nLecture 31	\r\nAdvantages of ObjectIds created by MongoDB\r\n02:52\r\nLecture 32	\r\nDisadvantages of ObjectIds created by MongoDB\r\n03:00\r\nQuiz 6	\r\nQuiz on ObjectIds in MongoDB\r\n8 questions\r\nSection 8: Aggregation Framework in MongoDB\r\nLecture 33	\r\nAggregation Framework In MongoDB\r\n03:44\r\nLecture 34	\r\nUsing aggregate() method- Aggregation Example 1\r\n07:29\r\nLecture 35	\r\nUsing distinct() and count()\r\n05:58\r\nLecture 36	\r\nSorting documents\r\n02:53\r\nSection 9: Data Modeling in MongoDB\r\nLecture 37	\r\nIntroduction to Data Modelling in MongoDB\r\n03:38\r\nLecture 38	\r\nData Modeling using References\r\n04:07\r\nLecture 39	\r\nData Modeling using Embedded documents\r\n02:58\r\nSection 10: Relationships in MongoDB\r\nLecture 40	\r\nRelationships in MongoDB\r\n02:18\r\nLecture 41	\r\nOne-To-One Relationship\r\n05:13\r\nLecture 42	\r\nOne-To-Many Relationship\r\n05:08\r\nLecture 43	\r\nMany-To-Many Relationship\r\n04:11\r\nSection 11: User/Role Management In MongoDB\r\nLecture 44	\r\nCreating User in MongoDB Database\r\n05:08\r\nLecture 45	\r\nStarting mongod server with Authentication\r\n03:59\r\nSection 12: Doubt Clarification Section- Answers to Questions asked on Course Discussions\r\nLecture 46	\r\nAsk Your Questions/Doubts!!\r\nPreview\r\n01:04\r\nLecture 47	\r\n$natural Operator Sorting\r\n06:03\r\nLecture 48	\r\nexplain() method parameter options\r\n06:23\r\nLecture 49	\r\nGroup by using Reduce Function\r\n08:13\r\nSection 13: Regular Expressions in MongoDB\r\nLecture 50	\r\nRegular Expressions in MongoDB\r\n03:47\r\nLecture 51	\r\nUsing $regex operator for Pattern Matching\r\n06:32\r\nLecture 52	\r\nPattern Matching without $regex Operator\r\n02:01\r\nLecture 53	\r\nPattern Matching with $options - case insensitive\r\n03:18\r\nLecture 54	\r\nFetching Last ''n'' documents from a collection\r\n07:13\r\nSection 14: Map-Reduce in MongoDB\r\nLecture 55	\r\nIntroduction to Map-Reduce\r\n08:20\r\nLecture 56	\r\nDemo - Map-Reduce in MongodB\r\n08:35\r\nSection 15: Project - Working with node.js and MongoDB\r\nLecture 57	\r\nInstalling node.js\r\n03:45\r\nLecture 58	\r\nGetting Familiar With NodeJS -REPL Part 1\r\n05:12\r\nLecture 59	\r\nGetting Familiar With NodeJS -REPL Part 2\r\n05:44\r\nLecture 60	\r\nWorking With NPM: Node Package Manager\r\n06:53\r\nLecture 61	\r\nCreating http server with Node.js - Node.js First Project\r\n05:42\r\nLecture 62	\r\nCreating Project Structure & Installing The MongoDB Node.js driver\r\n15:31\r\nLecture 63	\r\nCreating Collections & Inserting Documents/Data using Node.js\r\n08:27\r\nLecture 64	\r\nUpdating documents in MonogDB using Node.js\r\n05:44\r\nLecture 65	\r\nQuerying and Deleting Documents using Node.js\r\n05:15\r\nSection 16: Bonus\r\nLecture 66	\r\nBonus\r\nArticle', 0, '2016-08-15 07:36:30', '2016-08-15 07:36:30', 1),
(5, 'MongoDB Advance L2', 'MONGOL2', 'Mongo Database Advance', 0, 0, 0, '', '', '', 0, '2016-08-15 07:36:56', '2016-08-15 07:36:56', 1),
(6, 'Angular JS', 'ANGL1', 'Angular JS Level 1', 0, 0, 0, 'angular.png', '<h3><strong>Course Description</strong></h3>\n\n<p>This AngularJS training course from Infinite Skills teaches you all about this open-source JavaScript framework. This course is designed for the absolute beginner, meaning no prior knowledge of AngularJS is required, however you should already have a fundamental understanding of HTML, CSS and JavaScript.</p>\n\n<p><br />\nYou will start by setting up the application and learning about the views, controllers, and built-in directions. From there, the course will teach you about filters, showing you tricks with filters and how to create custom filters. This video tutorial will cover topics in AngularJS including service types, directives and directive communication channels, routing and promises, and advanced scope. Finally, you will learn about interacting with servers and 3rd party libraries.<br />\n<br />\nBy the completion of this computer based training course, you will have gained the knowledge and experience necessary for working with the AngularJS framework. Working files are included, allowing you to follow along with the author throughout the lessons.</p>\n\n<h3><strong>What are the requirements?</strong></h3>\n\n<ul>\n	<li>A willingness to learn cool stuff</li>\n</ul>\n\n<h3><strong>What am I going to get from this course?</strong></h3>\n\n<ul>\n	<li>Learn everything you need to know about the AngularJS framework</li>\n</ul>\n\n<h3><strong>What is the target audience?</strong></h3>\n\n<ul>\n	<li>Web Designers and Developers</li>\n</ul>\n\n<h3><strong>What you get with this course?</strong></h3>\n', '<p><strong>Section 1: Getting To Know The AngularJS FrameworkLecture 1</strong></p>\n\n<p><strong>Section 2: Views, Controllers, And Built-In DirectivesLecture 7</strong></p>\n\n<p><strong>Section 3: FiltersLecture </strong></p>\n\n<p><strong>Section 4: AngularJS Service TypesLecture </strong></p>\n\n<p><strong>Section 5: DirectivesLecture 26</strong></p>\n\n<p><strong>Section 6: Routing And PromisesLecture 35</strong></p>\n\n<p><strong>Section 7: Advanced ScopeLecture </strong></p>\n\n<p><strong>Section 8: TestingLecture </strong></p>\n\n<p><strong>Section 9: Practices For Production AppsLecture </strong></p>\n\n<p><strong>Section 10: Interacting With ServersLecture </strong></p>\n\n<p><strong>Section 11: 3rd Party LibrariesLecture</strong></p>\n', 24, '2016-08-15 07:37:19', '2016-08-31 21:04:46', 1),
(7, 'Node.JS', 'NODEL1', 'Node.JS Level 1', 0, 0, 0, '', '', '', 0, '2016-08-15 07:37:42', '2016-08-15 07:37:42', 1),
(8, 'JOB Support', 'JOBSUPPORT', 'Job Support', 0, 0, 0, '', '', '', 0, '2016-08-15 07:38:03', '2016-08-16 18:42:50', 1),
(9, 'rwerew', 'rewrewre', 'wrwer', 0, 0, 0, 'ewrewrew', '<p>erewrewr</p>\n', '<p>ewrewrewrewr</p>\n', 5, '2016-08-31 10:17:19', '2016-08-31 10:17:19', 1);

-- --------------------------------------------------------

--
-- Table structure for table `fee_details`
--

CREATE TABLE `fee_details` (
  `id` int(11) NOT NULL,
  `fee_description` varchar(200) NOT NULL,
  `fee_total` int(11) NOT NULL,
  `fee_paid` int(11) NOT NULL,
  `fee_due` int(11) NOT NULL,
  `fee_due_date` date NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `fee_details`
--

INSERT INTO `fee_details` (`id`, `fee_description`, `fee_total`, `fee_paid`, `fee_due`, `fee_due_date`, `createdAt`, `updatedAt`) VALUES
(1, 'Training Fee', 72000, 0, 72000, '2016-10-08', '2016-08-15 16:19:19', '2016-08-18 23:03:37'),
(2, 'Training Fee', 9000, 0, 9000, '0000-00-00', '2016-08-15 16:37:08', '2016-08-15 16:37:08'),
(3, 'Training Fee', 20000, 20000, 0, '2016-08-27', '2016-08-15 16:43:47', '2016-08-21 12:12:57'),
(4, 'Training Fee', 5000, 5000, 0, '2016-08-21', '2016-08-15 16:53:43', '2016-08-21 13:23:30'),
(5, 'Training Fee', 20000, 0, 20000, '0000-00-00', '2016-08-15 17:36:55', '2016-08-15 17:36:55'),
(6, 'Training Fee', 15000, 15000, 0, '2016-08-25', '2016-08-15 17:52:49', '2016-08-21 13:24:15'),
(7, 'Training Fee', 10000, 0, 10000, '0000-00-00', '2016-08-15 17:57:59', '2016-08-15 17:57:59'),
(8, 'Training Fee', 15000, 0, 15000, '0000-00-00', '2016-08-15 18:08:58', '2016-08-15 18:08:58'),
(9, 'Training Fee', 10000, 0, 10000, '0000-00-00', '2016-08-15 18:16:49', '2016-08-15 18:16:49'),
(10, 'Training Fee', 210000, 0, 210000, '2016-09-16', '2016-08-15 18:25:31', '2016-08-18 23:07:13');

-- --------------------------------------------------------

--
-- Table structure for table `instructor`
--

CREATE TABLE `instructor` (
  `id` int(11) NOT NULL,
  `name` varchar(100) NOT NULL,
  `age` tinyint(4) NOT NULL,
  `designation` varchar(200) NOT NULL,
  `biography` text NOT NULL,
  `image` varchar(200) NOT NULL,
  `facebook_profile` varchar(100) NOT NULL,
  `linkedin_profile` varchar(100) NOT NULL,
  `twitter_profile` varchar(100) NOT NULL,
  `skype_id` int(100) NOT NULL,
  `email` varchar(200) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00' ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `instructor`
--

INSERT INTO `instructor` (`id`, `name`, `age`, `designation`, `biography`, `image`, `facebook_profile`, `linkedin_profile`, `twitter_profile`, `skype_id`, `email`, `createdAt`, `updatedAt`) VALUES
(1, 'Rajesh Kumar Jha', 31, 'Module Lead', 'I have 6+ year of experience working with IT organization on end to end Web technology. I have been working on latest javascript Technology includes Angular JS, Node.js, Mongo Db, Express JS, Sails JS, Strong Loop, Mysql, PHP and others.\r\n\r\n', '', '', 'rkjha_it_in', 'rkjha_it_in', 0, 'rkjha.it.in@gmail.com', '2016-08-10 00:00:00', '2016-08-23 18:30:00');

-- --------------------------------------------------------

--
-- Table structure for table `payment_method`
--

CREATE TABLE `payment_method` (
  `id` int(11) NOT NULL,
  `title` varchar(50) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `payment_method`
--

INSERT INTO `payment_method` (`id`, `title`, `createdAt`, `updatedAt`) VALUES
(1, 'By Cash', '2016-08-16 00:00:00', '2016-08-16 00:00:00'),
(2, 'Bank Transfer', '2016-08-16 23:30:17', '2016-08-16 23:30:17'),
(3, 'Credit Card', '2016-08-16 23:33:47', '2016-08-16 23:33:47');

-- --------------------------------------------------------

--
-- Table structure for table `payment_transaction`
--

CREATE TABLE `payment_transaction` (
  `id` int(11) NOT NULL,
  `student_id` int(11) NOT NULL,
  `payment_method` int(11) NOT NULL,
  `payment_type` int(11) NOT NULL,
  `batch_id` int(11) NOT NULL,
  `course_id` int(11) NOT NULL,
  `amount` int(11) NOT NULL,
  `payment_date` date NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `payment_transaction`
--

INSERT INTO `payment_transaction` (`id`, `student_id`, `payment_method`, `payment_type`, `batch_id`, `course_id`, `amount`, `payment_date`, `createdAt`, `updatedAt`) VALUES
(1, 1, 2, 3, 1, 5, 19650, '2016-08-17', '2016-08-18 19:09:48', '2016-08-18 19:09:48'),
(2, 1, 2, 3, 1, 5, 15000, '2016-07-15', '2016-08-18 19:52:39', '2016-08-18 19:52:39'),
(3, 1, 2, 3, 1, 5, 5000, '2016-08-18', '2016-08-18 23:01:40', '2016-08-18 23:01:40'),
(4, 1, 2, 3, 1, 5, 5000, '2016-08-18', '2016-08-18 23:02:33', '2016-08-18 23:02:33'),
(5, 1, 2, 3, 1, 5, 5000, '2016-08-18', '2016-08-18 23:03:37', '2016-08-18 23:03:37'),
(6, 10, 2, 3, 9, 8, 19650, '2016-08-17', '2016-08-18 23:07:13', '2016-08-18 23:07:13'),
(7, 4, 1, 3, 10, 2, 2000, '2016-08-12', '2016-08-20 17:35:09', '2016-08-20 17:35:09'),
(8, 3, 2, 3, 3, 6, 2000, '2016-08-04', '2016-08-21 11:22:02', '2016-08-21 11:22:02'),
(9, 3, 2, 3, 3, 6, 2000, '2016-08-04', '2016-08-21 11:22:13', '2016-08-21 11:22:13'),
(10, 3, 2, 3, 3, 6, 2000, '2016-08-04', '2016-08-21 11:22:17', '2016-08-21 11:22:17'),
(11, 3, 2, 3, 3, 6, 2000, '2016-08-04', '2016-08-21 11:22:18', '2016-08-21 11:22:18'),
(12, 3, 2, 3, 3, 6, 2000, '2016-08-04', '2016-08-21 11:22:19', '2016-08-21 11:22:19'),
(13, 3, 2, 2, 3, 6, 10000, '2016-08-17', '2016-08-21 12:12:57', '2016-08-21 12:12:57'),
(14, 4, 2, 2, 10, 2, 3000, '2016-08-18', '2016-08-21 13:23:30', '2016-08-21 13:23:30'),
(15, 6, 2, 1, 6, 8, 2000, '2016-08-10', '2016-08-21 13:23:59', '2016-08-21 13:23:59'),
(16, 6, 2, 1, 6, 8, 2000, '2016-08-10', '2016-08-21 13:24:03', '2016-08-21 13:24:03'),
(17, 6, 2, 1, 6, 8, 2000, '2016-08-10', '2016-08-21 13:24:05', '2016-08-21 13:24:05'),
(18, 6, 2, 1, 6, 8, 2000, '2016-08-10', '2016-08-21 13:24:06', '2016-08-21 13:24:06'),
(19, 6, 2, 1, 6, 8, 2000, '2016-08-10', '2016-08-21 13:24:06', '2016-08-21 13:24:06'),
(20, 6, 2, 1, 6, 8, 2000, '2016-08-10', '2016-08-21 13:24:06', '2016-08-21 13:24:06'),
(21, 6, 2, 1, 6, 8, 2000, '2016-08-10', '2016-08-21 13:24:07', '2016-08-21 13:24:07'),
(22, 6, 2, 1, 6, 8, 2000, '2016-08-10', '2016-08-21 13:24:08', '2016-08-21 13:24:08'),
(23, 6, 2, 1, 6, 8, 1000, '2016-08-10', '2016-08-21 13:24:15', '2016-08-21 13:24:15');

-- --------------------------------------------------------

--
-- Table structure for table `payment_type`
--

CREATE TABLE `payment_type` (
  `id` int(11) NOT NULL,
  `title` varchar(100) NOT NULL,
  `account_no` varchar(30) NOT NULL,
  `branch` varchar(200) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `payment_type`
--

INSERT INTO `payment_type` (`id`, `title`, `account_no`, `branch`, `createdAt`, `updatedAt`) VALUES
(1, 'CASH', '00000000', 'NA', '2016-08-09 00:00:00', '2016-08-10 00:00:00'),
(2, 'SBI', '200000000022', 'Bangalore', '2016-08-01 00:00:00', '2016-08-08 00:00:00'),
(3, 'PNB', '1313131313', 'Benipatti', '2016-08-16 23:24:41', '2016-08-16 23:24:41'),
(4, 'Citi Bank', '500000', 'Delhi', '2016-08-16 23:34:16', '2016-08-16 23:34:16'),
(5, 'CITIBANK', '22546464646', 'HKK  JLJL LLLL L', '2016-08-26 21:08:55', '2016-08-26 21:08:55'),
(6, '54646464646', '4646464646', '545646464646', '2016-08-26 21:13:57', '2016-08-26 21:13:57');

-- --------------------------------------------------------

--
-- Table structure for table `reviews`
--

CREATE TABLE `reviews` (
  `id` int(11) NOT NULL,
  `review` text NOT NULL,
  `rating` int(11) NOT NULL,
  `course_id` int(11) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `student`
--

CREATE TABLE `student` (
  `id` int(11) NOT NULL,
  `info_id` int(11) NOT NULL,
  `course_id` int(11) NOT NULL,
  `batch_id` int(11) NOT NULL,
  `fee_id` int(11) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `student`
--

INSERT INTO `student` (`id`, `info_id`, `course_id`, `batch_id`, `fee_id`, `createdAt`, `updatedAt`) VALUES
(1, 1, 5, 1, 1, '2016-08-15 16:19:20', '2016-08-15 16:19:20'),
(2, 2, 8, 2, 2, '2016-08-15 16:37:08', '2016-08-15 16:37:08'),
(3, 3, 6, 3, 3, '2016-08-15 16:43:48', '2016-08-15 16:43:48'),
(4, 4, 2, 10, 4, '2016-08-15 16:53:43', '2016-08-15 16:53:43'),
(5, 5, 8, 5, 5, '2016-08-15 17:36:55', '2016-08-15 17:36:55'),
(6, 6, 8, 6, 6, '2016-08-15 17:52:49', '2016-08-15 17:52:49'),
(7, 7, 6, 4, 7, '2016-08-15 17:57:59', '2016-08-15 17:57:59'),
(8, 8, 6, 7, 8, '2016-08-15 18:08:59', '2016-08-15 18:08:59'),
(9, 9, 1, 8, 9, '2016-08-15 18:16:50', '2016-08-15 18:16:50'),
(10, 10, 8, 9, 10, '2016-08-15 18:25:32', '2016-08-15 18:25:32');

-- --------------------------------------------------------

--
-- Table structure for table `student_info`
--

CREATE TABLE `student_info` (
  `id` int(11) NOT NULL,
  `stu_first_name` varchar(255) DEFAULT NULL,
  `stu_middle_name` varchar(255) DEFAULT NULL,
  `stu_last_name` varchar(255) DEFAULT NULL,
  `stu_gender` varchar(255) DEFAULT NULL,
  `stu_dob` date DEFAULT NULL,
  `stu_email_id` varchar(255) DEFAULT NULL,
  `stu_admission_date` date DEFAULT NULL,
  `stu_photo` varchar(255) DEFAULT NULL,
  `stu_mobile_no` varchar(255) DEFAULT NULL,
  `country` varchar(50) NOT NULL DEFAULT 'India',
  `createdAt` datetime DEFAULT NULL,
  `updatedAt` timestamp NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `student_info`
--

INSERT INTO `student_info` (`id`, `stu_first_name`, `stu_middle_name`, `stu_last_name`, `stu_gender`, `stu_dob`, `stu_email_id`, `stu_admission_date`, `stu_photo`, `stu_mobile_no`, `country`, `createdAt`, `updatedAt`) VALUES
(1, 'Shankar', 'Prashad', NULL, 'Male', '1999-09-09', 'student@tutordesk.com', '2015-09-12', NULL, '9999999999', 'India', '2016-08-15 16:19:19', '2016-08-16 14:45:57'),
(2, 'Sowmya', 'G', NULL, 'Female', '1999-09-09', 'student@tutordesk.com', '2015-09-07', NULL, '9999999999', 'India', '2016-08-15 16:37:07', '2016-08-15 20:37:07'),
(3, 'Chandra', 'Sekhar', NULL, 'Male', '1999-09-09', 'student@tutordesk.com', '2019-09-15', NULL, '9999999999', 'India', '2016-08-15 16:43:47', '2016-08-15 20:43:47'),
(4, 'Suman', 'Shah', NULL, 'Male', '1999-09-09', 'student@tutordesk.com', '2015-10-02', NULL, '9999999999', 'India', '2016-08-15 16:53:22', '2016-08-15 20:53:22'),
(5, 'Somya', 'M', NULL, 'Female', '1999-09-09', 'student@tutordesk.com', '2015-09-07', NULL, '9999999999', 'India', '2016-08-15 17:36:54', '2016-08-15 21:36:54'),
(6, 'Ramya', 'Datla', NULL, 'Female', '1999-09-09', 'student@tutordesk.com', '2015-12-12', NULL, '9999999999', 'United States Of Amerika', '2016-08-15 17:52:48', '2016-08-15 21:52:48'),
(7, 'Himanshu', 'Sachin', NULL, 'Male', '1999-09-09', 'student@tutordesk.com', '2015-10-18', NULL, '9999999999', 'India', '2016-08-15 17:57:38', '2016-08-15 21:57:38'),
(8, 'Sanket', 'Mandapati', NULL, 'Male', '1999-09-09', 'student@tutordesk.com', '2016-03-12', NULL, '9999999999', 'India', '2016-08-15 18:08:58', '2016-08-15 22:08:58'),
(9, 'Giri', 'Balaji', NULL, 'Male', '1999-09-09', 'student@tutordesk.com', '2016-03-02', NULL, '9999999999', 'India', '2016-08-15 18:16:49', '2016-08-15 22:16:49'),
(10, 'Himanshu', 'Patel', NULL, 'Male', '1999-09-09', 'student@tutordesk.com', '2016-03-02', NULL, '9999999999', 'India', '2016-08-15 18:25:31', '2016-08-15 22:25:31');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `user_id` int(11) NOT NULL,
  `user_login_id` varchar(65) NOT NULL,
  `user_password` varchar(150) NOT NULL,
  `user_type` char(2) NOT NULL,
  `is_block` tinyint(1) NOT NULL DEFAULT '0',
  `createdAt` datetime NOT NULL,
  `created_by` int(11) NOT NULL,
  `updatedAt` datetime DEFAULT NULL,
  `updated_by` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`user_id`, `user_login_id`, `user_password`, `user_type`, `is_block`, `createdAt`, `created_by`, `updatedAt`, `updated_by`) VALUES
(1, 'admin', 'admin', 'A', 0, '2016-03-16 10:26:14', 1, NULL, NULL);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `batch`
--
ALTER TABLE `batch`
  ADD PRIMARY KEY (`id`),
  ADD KEY `course_id` (`course_id`);

--
-- Indexes for table `courses`
--
ALTER TABLE `courses`
  ADD PRIMARY KEY (`course_id`),
  ADD UNIQUE KEY `course_name` (`course_name`,`course_code`);

--
-- Indexes for table `fee_details`
--
ALTER TABLE `fee_details`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `instructor`
--
ALTER TABLE `instructor`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `payment_method`
--
ALTER TABLE `payment_method`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `payment_transaction`
--
ALTER TABLE `payment_transaction`
  ADD PRIMARY KEY (`id`),
  ADD KEY `pament_type` (`payment_type`),
  ADD KEY `batch_id` (`batch_id`),
  ADD KEY `course_id` (`course_id`),
  ADD KEY `student_id_2` (`student_id`),
  ADD KEY `payment_method_2` (`payment_method`);

--
-- Indexes for table `payment_type`
--
ALTER TABLE `payment_type`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `reviews`
--
ALTER TABLE `reviews`
  ADD PRIMARY KEY (`id`),
  ADD KEY `course_id` (`course_id`);

--
-- Indexes for table `student`
--
ALTER TABLE `student`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fk_info` (`info_id`),
  ADD KEY `course_id` (`course_id`),
  ADD KEY `batch_id` (`batch_id`),
  ADD KEY `fee_id` (`fee_id`);

--
-- Indexes for table `student_info`
--
ALTER TABLE `student_info`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`user_id`),
  ADD UNIQUE KEY `user_login_id` (`user_login_id`),
  ADD KEY `updated_by` (`updated_by`),
  ADD KEY `created_by` (`created_by`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `batch`
--
ALTER TABLE `batch`
  MODIFY `id` int(5) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;
--
-- AUTO_INCREMENT for table `courses`
--
ALTER TABLE `courses`
  MODIFY `course_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;
--
-- AUTO_INCREMENT for table `fee_details`
--
ALTER TABLE `fee_details`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;
--
-- AUTO_INCREMENT for table `instructor`
--
ALTER TABLE `instructor`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
--
-- AUTO_INCREMENT for table `payment_method`
--
ALTER TABLE `payment_method`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
--
-- AUTO_INCREMENT for table `payment_transaction`
--
ALTER TABLE `payment_transaction`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=24;
--
-- AUTO_INCREMENT for table `payment_type`
--
ALTER TABLE `payment_type`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;
--
-- AUTO_INCREMENT for table `reviews`
--
ALTER TABLE `reviews`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT for table `student`
--
ALTER TABLE `student`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;
--
-- AUTO_INCREMENT for table `student_info`
--
ALTER TABLE `student_info`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;
--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `user_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
--
-- Constraints for dumped tables
--

--
-- Constraints for table `batch`
--
ALTER TABLE `batch`
  ADD CONSTRAINT `fk_course_batch` FOREIGN KEY (`course_id`) REFERENCES `courses` (`course_id`);

--
-- Constraints for table `payment_transaction`
--
ALTER TABLE `payment_transaction`
  ADD CONSTRAINT `payment_transaction_ibfk_1` FOREIGN KEY (`student_id`) REFERENCES `student_info` (`id`),
  ADD CONSTRAINT `payment_transaction_ibfk_2` FOREIGN KEY (`payment_method`) REFERENCES `payment_method` (`id`),
  ADD CONSTRAINT `payment_transaction_ibfk_3` FOREIGN KEY (`payment_type`) REFERENCES `payment_type` (`id`),
  ADD CONSTRAINT `payment_transaction_ibfk_4` FOREIGN KEY (`batch_id`) REFERENCES `batch` (`id`),
  ADD CONSTRAINT `payment_transaction_ibfk_5` FOREIGN KEY (`course_id`) REFERENCES `courses` (`course_id`);

--
-- Constraints for table `reviews`
--
ALTER TABLE `reviews`
  ADD CONSTRAINT `reviews_ibfk_1` FOREIGN KEY (`course_id`) REFERENCES `courses` (`course_id`);

--
-- Constraints for table `student`
--
ALTER TABLE `student`
  ADD CONSTRAINT `fk_batch_id` FOREIGN KEY (`batch_id`) REFERENCES `batch` (`id`),
  ADD CONSTRAINT `fk_info` FOREIGN KEY (`info_id`) REFERENCES `student_info` (`id`),
  ADD CONSTRAINT `student_ibfk_1` FOREIGN KEY (`course_id`) REFERENCES `courses` (`course_id`),
  ADD CONSTRAINT `student_ibfk_2` FOREIGN KEY (`fee_id`) REFERENCES `fee_details` (`id`);

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
