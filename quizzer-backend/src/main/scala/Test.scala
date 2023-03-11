
import org.apache.spark.rdd.RDD
import org.apache.spark.sql.SparkSession

object Test {

  def main(args:Array[String]): Unit = {

    val spark:SparkSession = SparkSession.builder()
      .master("local[*]")
      .appName("SparkByExamples.com")
      .getOrCreate()

    spark.sparkContext.setLogLevel("ERROR")
    val df= spark.read.option("multiline","true").option("overwrite",true).json("/Users/b0273254/Desktop/joblist.json")

    df.show(100)
    df.write.json("/Users/b0273254/Desktop/shivank_spark/")
    println("finished shivank")
  }
}

