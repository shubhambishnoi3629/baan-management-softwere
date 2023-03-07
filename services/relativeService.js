export class RelativeService {
  relativeModel;
  constructor(relativeModel) {
    this.relativeModel = relativeModel
  };

  async getAll(pariwarId) {
    return this.relativeModel.find({
      pariwarId: pariwarId,
    });
  }

  async createRelative(data) {
    const relative = await this.relativeModel.create(data);

    return relative;
  }

  async updateRelativeById(id, data) {
    const relative = await this.relativeModel.findOneAndUpdate(
      { 
        _id: id,
      },
      {
        $set: data
      },
      {
        new: 1
      }
    );

    return relative;
  }

  async deleteRelativeById(id) {
    return this.relativeModel.deleteOne({
      id: id,
    });
  }

  async createRelativeByBaans(baans, pariwarId) {
    const data = baans.map(
      (baan) => {
        return {
          firstName: baan.firstName,
          lastName: baan.lastName,
          fathersName: baan.fatherName,
          address: baan.address,
          nickName: baan.nickName,
          pariwarId,
        };
      }
    );
    const createRelativeData = [];
    const oldRelative = [];
    for (const relativeBase of data) {
      const oldRelative = await this.checkRelative(relativeBase);
      if(oldRelative) {
        oldRelative.push(oldRelative);
      } else {
        createRelativeData.push(relativeBase);
      }
    }

    const relative = await this.relativeModel.create(createRelativeData);

    return [
      ...relative,
      ...oldRelative,
    ];
  }

  async checkRelative(relativeBase) {
    return this.relativeModel.findOne({
      firstName: relativeBase.firstName,
      lastName: relativeBase.lastName,
      fathersName: relativeBase.fatherName,
      address: relativeBase.address,
      nickName: relativeBase.nickName,
      pariwarId: relativeBase.pariwarId
    });
  }
}
