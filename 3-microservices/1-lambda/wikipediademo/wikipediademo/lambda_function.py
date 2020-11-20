import json
import wikipedia

# prints when function loads
print('Loading function')


def lambda_handler(event, context):
    ''' Wikipedia page summarizer.
        :param event: a request with a wikipedia "entity" that has page information
        :return: a response that contains the first sentence of a wikipedia page,
            the response is JSON formatted.'''
    
    if 'body' in event:
        event = json.loads(event["body"])
    
    # Get the wikipedia "entity" from the body of the request
    entity = event["entity"]
    res = wikipedia.summary(entity, sentences=1) # first sentence, result

    # print statements
    print(f"context: {context}, event: {event}")
    print(f"Response from wikipedia API: {res}")
    
    ## TO DO: Format the response as JSON and return the result
    response = {
        "statusCode": 200,
        "headers": { "Content-type": "application/json" },
        "body": json.dumps({"res": res})
    }
    
    return response