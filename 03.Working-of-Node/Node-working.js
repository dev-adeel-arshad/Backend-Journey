/*
==================================================
📌 Node.js Core Concepts (Quick Notes)
==================================================

🔹 Node.js Engine:
- Built on V8 (C++) to run JavaScript fast.
- Uses libuv (C++) for async I/O, event loop, and thread pool.

🔹 Single Thread:
- Node.js main thread handles incoming requests.
- It does not create a new thread per request (unlike some other servers).
- This makes Node.js lightweight and efficient.

🔹 Event Loop:
- A continuous loop that checks if there are tasks to run.
- It looks at:
  1. Call Stack → immediate JS tasks.
  2. Callback Queue → results of async tasks waiting to run.
  3. Microtask Queue (Promises, async/await).
- The loop ensures Node.js can keep processing many requests without blocking.

🔹 Threads:
- Node.js main thread = 1 (single-threaded for JS execution).
- Worker Threads (libuv thread pool) = default 4.
  - Handle slow/expensive tasks: file system, DNS, crypto, compression, etc.
  - Can be increased by changing UV_THREADPOOL_SIZE.
- Think of them as "workers" doing background jobs.

🔹 Blocking vs Non-Blocking:
- Blocking (Sync): Code runs one by one, main thread waits.
  Example: fs.writeFileSync()
- Non-Blocking (Async): Task is offloaded to worker threads,
  main thread continues with other work, result comes later via callback/promise.
  Example: fs.writeFile()

🔹 Flow of a Request in Node.js:
1. Request arrives → goes into Event Loop.
2. If it's simple (like math), main thread executes directly.
3. If it's slow (like file/db), libuv sends it to a worker thread.
4. Event Loop continues handling other tasks (doesn't wait).
5. When worker finishes, result is added to Callback Queue.
6. Event Loop picks it up and executes callback.

==================================================
Example Code: Sync vs Async file creation
==================================================
*/



const os=require("os")
const fs = require("fs");

// -------------------- Sync (Blocking) --------------------
console.log("1: Start Sync File Creation");

fs.writeFileSync("syncFile.txt", "This file was created synchronously.");

console.log("2: Sync File Created");
console.log("3: End of Sync Example\n");

// -------------------- Async (Non-Blocking) --------------------
console.log("4: Start Async File Creation");

fs.writeFile("asyncFile.txt", "This file was created asynchronously.", (err) => {
  if (err) {
    console.error("Error creating async file:", err);
    return;
  }
  console.log("5: Async File Created (inside callback)");
});

console.log("6: End of Async Example (but async not finished yet)");

console.log("Number of threads in my operating system..",os.cpus().length) // to see how many threads are there in the thread pool default there are 4 threads that are used
// 
;


