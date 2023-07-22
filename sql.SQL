ALTER TABLE users
ADD CONSTRAINT UQ_users_email UNIQUE (email);
CREATE TABLE users(id INT PRIMARY KEY IDENTITY(1,1),username VARCHAR(40) UNIQUE,email VARCHAR(40) UNIQUE,password VARCHAR(200),fullnames VARCHAR(50),coverpic VARCHAR(100),profilePic VARCHAR(100),city VARCHAR(45),WEBSITE VARCHAR(45))
CREATE TABLE stories ( id PRIMARY KEY IDENTITY(1,1),image VARCHAR(200), userId INT,FOREIGN KEY (userId) REFERENCES users(id) )
CREATE TABLE posts
(
    id INT PRIMARY KEY IDENTITY(1,1),
    description VARCHAR(200),
    image VARCHAR(200),
    userId INT,
    
    FOREIGN KEY (userId) REFERENCES users(id)
);
CREATE TABLE comments
(
    id INT PRIMARY KEY,
    description VARCHAR(200),
    userId INT,
    postId INT,

    FOREIGN KEY (userId) REFERENCES users(id),
    FOREIGN KEY (postId) REFERENCES posts(id)
);
-- Create the relationships table
CREATE TABLE relationships
(
    id INT PRIMARY KEY IDENTITY(1,1),
    followeruserId INT,
    followeduserId INT,
    
    FOREIGN KEY (followeruserId) REFERENCES users(id),
    FOREIGN KEY (followeduserId) REFERENCES users(id)
);


--cREATE lIKES 
CREATE TABLE likes
(
    id INT PRIMARY KEY IDENTITY(1,1),
    likesuserId INT,
    postuserId INT,
    
    FOREIGN KEY (likesuserId) REFERENCES users(id),
    FOREIGN KEY (postuserId) REFERENCES posts(id)
);
sp_rename 'likes.postuserId', 'likespostId', 'COLUMN';
ALTER TABLE message
ADD chatId INT;

-- Step 2: Add the foreign key constraint on the new column, referencing the primary key in the referenced table
ALTER TABLE message
ADD CONSTRAINT FK_Chat_Id
FOREIGN KEY (ChatID) REFERENCES chat (id);

ALTER TABLE message
ADD senderId INT;
ALTER TABLE message
ADD CONSTRAINT FK_Sender_Id
FOREIGN KEY (senderId) REFERENCES users (id);