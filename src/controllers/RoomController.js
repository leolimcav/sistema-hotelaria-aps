const Room = require('../models/Room');

module.exports = {
  async index (req, res) {
    try {
      const rooms = await Room.findAll();

      return res.json(rooms);
    } catch (err) {
      console.log(err);
      return res.json({ error: 'An error ocurred!' });
    }
  },

  async findOne (req, res) {
    const { room_id } = req.params;
    try {
      const room = await Room.findByPk(room_id);

      return res.json(room);
    } catch (err) {
      console.log(err);
      return res.json({ error: 'An error ocurred!' });
    }
  },

  async showRooms (req, res) {
    try {
      const rooms = await Room.findAll({
        where: { availability: 'AVAILABLE' }
      });

      return res.json(rooms);
    } catch (err) {
      console.log(err);
      return res.json({ error: 'An error ocurred!' });
    }
  },

  async store (req, res) {
    const { value, type } = req.body;
    const { filename } = req.file;
    try {
      const room = await Room.create({ value, type, photo: filename });

      return res.json(room);
    } catch (err) {
      console.log(err);
      return res.json({ error: 'An error ocurred!' });
    }
  },

  async update (req, res) {
    const { room_id } = req.params;
    const { filename } = req.file;
    const { value, type } = req.body;
    try {
      const room = await Room.findByPk(room_id);

      const updatedRoom = await room.update({ value, type, photo: filename });

      return res.json(updatedRoom);
    } catch (err) {
      console.log(err);
      return res.json({ error: 'An error ocurred!' });
    }
  },

  async destroy (req, res) {
    const { room_id } = req.params;
    try {
      const room = await Room.findByPk(room_id);

      await room.destroy();

      return res.json(room);
    } catch (err) {
      console.log(err);
      return res.json({ error: 'An error ocurred!' });
    }
  }
};
