export class RelativeService {
  relativeModel;
  nimtaService;
  constructor(relativeModel, nimtaService) {
    this.relativeModel = relativeModel;
    this.nimtaService = nimtaService;
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
    await this.nimtaService.removeRelativeByRelatveId(id);

    return this.relativeModel.deleteOne({
      _id: id,
    });
  }

  async createRelativeByBaans(baans, pariwarId) {
    const data = baans.map(
      (baan) => {
        return {
          firstName: baan.firstName,
          lastName: baan.lastName,
          fathersName: baan.fathersName,
          address: baan.address,
          nickName: baan.nickName,
          pariwarId,
        };
      }
    );
    const createRelativeData = [];
    const oldRelative = [];
    for (const relativeBase of data) {
      const isOldRelative = await this.checkRelative(relativeBase, pariwarId);
      if(isOldRelative) {
        oldRelative.push(relativeBase);
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

  async checkRelative(relativeBase, pariwarId) {
    return this.relativeModel.findOne({
      firstName: relativeBase.firstName,
      lastName: relativeBase.lastName,
      fathersName: relativeBase.fathersName,
      address: relativeBase.address,
      nickName: relativeBase.nickName,
      pariwarId,
    });
  }
}
