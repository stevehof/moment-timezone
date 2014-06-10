var moment = require("../../index");

exports.dst = {
  "dst" : function (t) {

		// MISSING HOUR
		//Parsed from missing hour
    t.equal(moment.tz("2014-03-09T01:45:00", "America/New_York").format(), "2014-03-09T01:45:00-05:00", "2014-03-09T01:45:00 in America/New_York should be 2014-03-09T01:45:00-04:00");
		//missing hour
    t.equal(moment.tz("2014-03-09T02:45:00", "America/New_York").format(), "2014-03-09T01:45:00-05:00", "2014-03-09T02:45:00 in America/New_York should be 2014-03-09T02:45:00-04:00");
    t.equal(moment.tz("2014-03-09T03:45:00", "America/New_York").format(), "2014-03-09T03:45:00-04:00", "2014-03-09T03:45:00 in America/New_York should be 2014-03-09T03:45:00-04:00");
    t.equal(moment.tz("2014-03-09T08:45:00", "America/New_York").format(), "2014-03-09T08:45:00-04:00", "2014-03-09T08:45:00 in America/New_York should be 2014-03-09T08:45:00-04:00");
    t.equal(moment.tz("2014-03-09T09:45:00", "America/New_York").format(), "2014-03-09T09:45:00-04:00", "2014-03-09T09:45:00 in America/New_York should be 2014-03-09T09:45:00-04:00");

		//From UTC
		t.equal(moment("2014-03-09T07:45:00").tz("America/New_York").format(), "2014-03-09T00:45:00-05:00", "2014-03-09T02:45:00 in America/New_York should be 2014-03-09T02:45:00-04:00");
    t.equal(moment("2014-03-09T08:45:00").tz("America/New_York").format(), "2014-03-09T01:45:00-05:00", "2014-03-09T03:45:00 in America/New_York should be 2014-03-09T03:45:00-04:00");
    t.equal(moment("2014-03-09T09:45:00").tz("America/New_York").format(), "2014-03-09T03:45:00-04:00", "2014-03-09T04:45:00 in America/New_York should be 2014-03-09T04:45:00-04:00");


		// AMBIGUOUS HOUR

    t.equal(moment.tz("2014-11-02T01:45:00", "America/New_York").format(), "2014-11-02T01:45:00-04:00", "2014-11-02T01:45:00 in America/New_York should be 2014-11-02T01:45:00-04:00");
    t.equal(moment.tz("2014-11-02T02:45:00", "America/New_York").format(), "2014-11-02T02:45:00-05:00", "2014-11-02T02:45:00 in America/New_York should be 2014-11-02T02:45:00-05:00");
    t.equal(moment.tz("2014-11-02T07:45:00", "America/New_York").format(), "2014-11-02T07:45:00-05:00", "2014-11-02T07:45:00 in America/New_York should be 2014-11-02T07:45:00-05:00");
    t.equal(moment.tz("2014-11-02T08:45:00", "America/New_York").format(), "2014-11-02T08:45:00-05:00", "2014-11-02T08:45:00 in America/New_York should be 2014-11-02T08:45:00-05:00");


		//From UTC
		t.equal(moment("2014-11-02T06:45:00").tz("America/New_York").format(), "2014-11-02T00:45:00-04:00", "2014-03-09T02:45:00 in America/New_York should be 2014-03-09T02:45:00-04:00");
		t.equal(moment("2014-11-02T07:45:00").tz("America/New_York").format(), "2014-11-02T01:45:00-04:00", "2014-03-09T02:45:00 in America/New_York should be 2014-03-09T02:45:00-04:00");
		t.equal(moment("2014-11-02T08:45:00").tz("America/New_York").format(), "2014-11-02T01:45:00-05:00", "2014-03-09T02:45:00 in America/New_York should be 2014-03-09T02:45:00-04:00");
    t.equal(moment("2014-11-02T09:45:00").tz("America/New_York").format(), "2014-11-02T02:45:00-05:00", "2014-03-09T03:45:00 in America/New_York should be 2014-03-09T03:45:00-04:00");
    t.equal(moment("2014-11-02T10:45:00").tz("America/New_York").format(), "2014-11-02T03:45:00-05:00", "2014-03-09T04:45:00 in America/New_York should be 2014-03-09T04:45:00-04:00");


    t.done();
  }
};