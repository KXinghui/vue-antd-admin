import SparkMD5 from "spark-md5";

export function md5(str) {
  var hexHash = SparkMD5.hash(str); // hex hash
  var rawHash = SparkMD5.hash(str, true);
  console.log(`${hexHash}=========${rawHash}`);
}

export function increMD5() {
  var spark = new SparkMD5();
  spark.append("Hi");
  spark.append(" there");
  return spark.end();
}

export function hashFile(file) {
  var blobSlice =
      File.prototype.slice ||
      File.prototype.mozSlice ||
      File.prototype.webkitSlice,
    chunkSize = 2097152, // Read in chunks of 2MB
    chunks = Math.ceil(file.size / chunkSize),
    currentChunk = 0,
    spark = new SparkMD5.ArrayBuffer(),
    fileReader = new FileReader();

  loadNext();

  fileReader.onload = function(e) {
    console.log("read chunk nr", currentChunk + 1, "of", chunks);
    spark.append(e.target.result); // Append array buffer
    currentChunk++;

    if (currentChunk < chunks) {
      loadNext();
    } else {
      console.log("finished loading");
      console.info("computed hash", spark.end()); // Compute hash
    }
  };

  fileReader.onerror = function() {
    console.warn("oops, something went wrong.");
  };

  function loadNext() {
    var start = currentChunk * chunkSize,
      end = start + chunkSize >= file.size ? file.size : start + chunkSize;

    fileReader.readAsArrayBuffer(blobSlice.call(file, start, end));
  }
}
