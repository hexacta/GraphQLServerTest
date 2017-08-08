import { MongoClient } from 'mongodb';
import Q from 'q';

// connection URL
const MongoUrl = 'mongodb://localhost:27017/bladerunner';

// service module
export const mongo = cb => {
	let deferred = Q.defer();

	// use connect method to connect to the Server
	MongoClient.connect(MongoUrl, (err, db) => {
		if (err) {
			return deferred.reject(err);
		}

		return deferred.resolve(db);
	});

	return deferred.promise;
};
