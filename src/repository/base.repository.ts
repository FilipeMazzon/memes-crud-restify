export class BaseRepository {
  private model: any;

  constructor(model) {
    this.model = model;
  }

  public async find(match = {}, project): Promise<any> {
    return this.model.find(match, project).lean();
  }

  public async findById(id, project): Promise<any> {
    return this.model.findById(id, project).lean();
  }

  public async create(object): Promise<any> {
    return this.model.create(object);
  }

  public async deleteById(id): Promise<any> {
    return this.model.deleteOne({ _id: id });
  }

}
