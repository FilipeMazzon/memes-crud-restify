if (response.body.length) {
  client.global.set('idMeme', response.body[0]._id);
}

