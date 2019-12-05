const Client = require('../models/Client');
const Room = require('../models/Room');

module.exports = {
  async index (req, res) {
    const { client_id } = req.params;
    try {
      const client = await Client.findByPk(client_id, {
        include: {
          association: 'room'
        },
        attributes: []
      });

      return res.json(client);
    } catch (err) {
      console.log(err);
      return res.json({ error: 'An error ocurred!' });
    }
  },

  async findOne (req, res) {
    const { client_id, room_id } = req.params;
    try {
      const room = await Room.findByPk(room_id, {
        include: {
          association: 'client',
          where: {
            id: client_id
          },
          attributes: []
        }
      });

      return res.json(room);
    } catch (err) {
      console.log(err);
      return res.json({ error: 'An error ocurred!' });
    }
  },

  async store (req, res) {
    const { room_id, client_id } = req.params;
    try {
      const client = await Client.findByPk(client_id);
      const room = await Room.findByPk(room_id);

      await client.addRoom(room_id);
      await room.setClient(client_id);

      return res.json({ msg: 'Booking successful!' });
    } catch (err) {
      console.log(err);
      return res.json({ error: 'An error ocurred!' });
    }
  },

  async destroy (req, res) {
    const { client_id, room_id } = req.params;
    try {
      const client = await Client.findByPk(client_id);
      const room = await Room.findByPk(room_id);

      await client.removeRoom(room_id);
      await room.removeClient(client_id);

      return res.json({ msg: 'Booking removal successful!' });
    } catch (err) {
      console.log(err);
      return res.json({ error: 'An error ocurred!' });
    }
  }
};
