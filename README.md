# MEVN
basic MEVN Fullstack practice - being familiar with MongoDB

# Problems Encountered:

1. Had to search online to find "git pull origin master --allow-unrelated-histories" to merge the git directories at repository and local new git folder.
2. mongod executable file (mongo daemon, I assume; should run in background upon calling) shuts down instantly unexpectedly. - code 100. It's a Windows problem for not linking data folder to some path properly. - Created "C:\data\db" directory and linked it to MongoDB using "mongod --dbpath C:\data\db". Creating directories through VSCode's terminal is undesirable (I only made the directory step by step (data first, then db))
